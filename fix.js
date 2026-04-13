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
// We also need to find local /images/ paths that we mistakenly overwrote, wait...
// They are already in the source as /images/photo-..._aHR0cH.jpg, let's restore from git or just run another regex.
// Wait, the files were modified inplace. I should restore them to unsplash URLs first, or just grab the backup if I have one?
// Ah, the user didn't commit to git. I can just search for `/images/photo-([a-zA-Z0-9-]+)_aHR0cH\.jpg` and replace them back to unsplash? 
// No, we lost the query params! 
