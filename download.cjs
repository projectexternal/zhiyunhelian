const fs = require('fs');
const https = require('https');
const path = require('path');
const crypto = require('crypto');

const srcDir = path.join(__dirname, 'src');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.vue')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const vueFiles = getFiles(srcDir);
const urlRegex = /https:\/\/images\.unsplash\.com\/[^'"\s\)]+/g;
const urlMap = new Map();

vueFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(urlRegex);
  if (matches) {
    matches.forEach(url => {
      // Clean up URL in case there's an ending quote captured
      const cleanUrl = url.replace(/['"]$/, '');
      const hash = crypto.createHash('md5').update(cleanUrl).digest('hex').substring(0, 10);
      let photoId = 'img';
      const m = cleanUrl.match(/photo-([a-zA-Z0-9]+-[a-zA-Z0-9]+)/);
      if (m && m[1]) photoId = 'photo-' + m[1];
      
      const filename = `${photoId}_${hash}.jpg`;
      urlMap.set(cleanUrl, filename);
    });
  }
});

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(publicImagesDir, filename);
    if (fs.existsSync(dest)) {
      resolve();
      return;
    }
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => file.close(resolve));
        }).on('error', err => {
          fs.unlink(dest, () => reject(err));
        });
      } else {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      }
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  console.log(`Found ${urlMap.size} unique images.`);
  
  for (const [url, filename] of urlMap.entries()) {
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(url, filename);
    } catch (e) {
      console.error(`Failed to download ${url}:`, e);
    }
  }

  console.log('Replacing URLs in Vue files...');
  vueFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;
    for (const [url, filename] of urlMap.entries()) {
      if (content.includes(url)) {
        // use split join to replace all instances safely
        content = content.split(url).join(`/images/${filename}`);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  });
  console.log('Done!');
}

run();
