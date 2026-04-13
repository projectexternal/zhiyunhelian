<script setup lang="ts">
const stats = [
  { value: '124+', label: '软件著作权' },
  { value: '9+', label: '实用新型专利' },
  { value: '23省', label: '服务网络覆盖' },
  { value: '80+', label: '覆盖城市' },
  { value: '154', label: '区县' },
  { value: '635+', label: '全国项目' },
];

const scenes = [
  { title: '安全 (Security)', desc: '防跌倒、防走失、紧急呼叫响应', icon: 'shield-check' },
  { title: '健康 (Healthy)', desc: '体征监测、慢病管理、在线问诊', icon: 'heart-pulse' },
  { title: '照护 (Care)', desc: '专业上门照护、机构入住服务', icon: 'hand-heart' },
  { title: '陪伴 (Accompany)', desc: '智能语音陪聊、精神文化生活', icon: 'users' },
];

const solutions = [
  { title: '社区领域', en: 'Community Care', img: '/images/photo-1576765608535-5f04d1e3f289_edcd02df2f.jpg' },
  { title: '机构领域', en: 'Nursing Facility', img: '/images/photo-1516383740770-fbcc5ccbece0_5827cccefe.jpg' },
  { title: '居家领域', en: 'Home-Based Care', img: '/images/photo-7910875498725ae44ed5ea7407ae3d5d.png' },
  { title: '长护领域', en: 'Long Term Care', img: '/images/photo-16b7023173fd589c0120141b9464cabd.png' },
  { title: '保险领域', en: 'Insurance Area', img: '/images/photo-de83418c3be92201e288bb4a9b22d3b2.png' },
  { title: '个人C端', en: 'Customer Pay', img: '/images/photo-1521791136064-7986c2920216_365abb4a1a.jpg' },
];

const cases = [
  { title: '上海虹口区养老服务指导中心', desc: '打造区级智慧养老示范标杆', date: '2023-10-15' },
  { title: '济南历下区E联+智慧养老', desc: '全场景数字养老解决方案落地', date: '2023-09-20' },
  { title: '梧州认知症照护中心', desc: '专业认知症长者照护新模式', date: '2023-08-05' },
  { title: '南京长护险服务示范区', desc: '长护险定点机构全流程数字化', date: '2023-07-12' },
];

const newsList = [
  { title: '国家发改委：大力发展银发经济，推动智慧养老普及', desc: '在最新发布的文件中明确指出，需结合物联网、大数据等技术，实现居家及机构养老的智能化改造...', date: '2023-11-20', img: '/images/photo-1560250097-0b93528c311a_76b6bbd37a.jpg' },
  { title: '多地出台新规：长护险覆盖面进一步扩大', desc: '关于长期护理保险制度的推进有了新进展，多地开始扩大试点范围...', date: '2023-11-15' },
  { title: '第六届智慧养老高峰论坛在京成功举办', desc: '行业专家齐聚一堂，共同探讨“AI+养老”新模式的落地与可持续发展...', date: '2023-11-08' },
  { title: '2023年中国健康老龄化蓝皮书发布', desc: '报告显示，数字基础设施建设已成为改善老年人生活质量的核心要素...', date: '2023-10-30' },
]
</script>

<template>
  <div>
    <!-- Banner -->
    <section class="banner flex items-center justify-center">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h1 class="fade-in-up">拾光科技，让长者生活更美好！</h1>
        <p class="fade-in-up delay-1">中国智慧养老数字基建平台</p>
        <div class="fade-in-up delay-2" style="margin-top: 40px;">
          <button class="btn btn-outline" style="border-color: white; color: white;">观看拾光养老宣传片</button>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="container">
        <h2>关于拾光</h2>
        <p class="section-subtitle">融合自研软件系统与智能硬件，提供一体化、全场景养老解决方案</p>
        
        <div class="grid grid-cols-2 gap-8 items-center">
          <div class="about-text">
            <h3>中国智慧养老领军企业</h3>
            <p>拾光养老以“拾光科技让长者生活更美好”为使命，致力于成为全球领先的智慧养老数字基建平台。我们通过自研数字系统与智能硬件的深度融合，为政府、社区、机构及保险等多业态提供一站式养老解决方案。</p>
            <p>我们的服务场景涵盖居家、社区、机构、长护险、家庭养老床位等全周期养老需求，服务网络遍及全国多个省市，真正做到“长者满意度永远排第一”。</p>
            <div class="values flex gap-4" style="margin-top: 30px;">
              <div class="value-item">
                <strong>热爱</strong>
                <span>Passion</span>
              </div>
              <div class="value-item">
                <strong>担当</strong>
                <span>Responsibility</span>
              </div>
              <div class="value-item">
                <strong>向阳而生</strong>
                <span>Optimism</span>
              </div>
            </div>
          </div>
          <div class="about-stats grid grid-cols-3 gap-4">
            <div class="stat-card" v-for="(stat, idx) in stats" :key="idx">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Technology -->
    <section class="technology bg-gray">
      <div class="container">
        <h2>数字科技</h2>
        <p class="section-subtitle">四大生活场景，全方位守护长者</p>
        
        <div class="grid grid-cols-4 gap-8">
          <div class="tech-card" v-for="scene in scenes" :key="scene.title">
            <div class="tech-icon"></div>
            <h3>{{ scene.title }}</h3>
            <p>{{ scene.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section class="solutions">
      <div class="container">
        <h2>解决方案</h2>
        <p class="section-subtitle">多业态融合，赋能全行业</p>
        
        <div class="grid grid-cols-3 gap-8">
          <div class="solution-card" v-for="sol in solutions" :key="sol.title">
            <div class="solution-img" :style="{ backgroundImage: `url(${sol.img})` }"></div>
            <div class="solution-content">
              <h3>{{ sol.title }}</h3>
              <p>{{ sol.en }}</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 40px;">
          <router-link to="/solutions" class="btn btn-outline">查看更多解决方案</router-link>
        </div>
      </div>
    </section>

    <!-- Industry News (Added for ICP Requirement reference to renlimao) -->
    <section class="news bg-gray">
      <div class="container">
        <h2>行业资讯</h2>
        <p class="section-subtitle">洞察行业趋势，把握养老动态</p>
        
        <div class="news-grid flex gap-8">
          <!-- Featured News -->
          <div class="news-featured flex-col" style="flex: 1;">
            <div class="news-img" :style="{ backgroundImage: `url(${newsList[0].img})` }"></div>
            <div class="news-content-box">
              <span class="news-date">{{ newsList[0].date }}</span>
              <h3>{{ newsList[0].title }}</h3>
              <p>{{ newsList[0].desc }}</p>
              <router-link to="/news" class="read-more">阅读详情 &rarr;</router-link>
            </div>
          </div>
          
          <!-- Normal News List -->
          <div class="news-list flex-col gap-4" style="flex: 1;">
            <div class="news-list-item flex items-center" v-for="(news, idx) in newsList.slice(1)" :key="idx">
              <div class="news-date-box flex-col items-center justify-center">
                <span class="day">{{ news.date.split('-')[2] }}</span>
                <span class="month">{{ news.date.split('-')[1] }}月</span>
              </div>
              <div class="news-text">
                <h4>{{ news.title }}</h4>
                <p>{{ news.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 40px;">
          <router-link to="/news" class="btn btn-outline">浏览更多资讯</router-link>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="cases">
      <div class="container">
        <h2>项目案例</h2>
        <p class="section-subtitle">635+ 全国项目落地经验，铸就行业标杆</p>
        
        <div class="grid grid-cols-2 gap-8">
          <div class="case-card flex items-center" v-for="c in cases" :key="c.title">
            <div class="case-date">
              <span class="day">{{ c.date.split('-')[2] }}</span>
              <span class="month">{{ c.date.split('-')[0] }}-{{ c.date.split('-')[1] }}</span>
            </div>
            <div class="case-info">
              <h3>{{ c.title }}</h3>
              <p>{{ c.desc }}</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 40px;">
          <router-link to="/cases" class="btn btn-outline">查看更多项目案例</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Banner Styles */
.banner {
  height: 100vh;
  min-height: 600px;
  position: relative;
  background-image: url('/images/photo-1576765608535-5f04d1e3f289_0d521cf061.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(30, 58, 95, 0.6), rgba(30, 58, 95, 0.4));
}

.banner-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
}

.banner h1 {
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.banner p {
  font-size: 24px;
  font-weight: 300;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* About Styles */
.about-text h3 {
  font-size: 28px;
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 15px;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.value-item {
  background-color: var(--bg-light);
  padding: 15px 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid var(--primary-color);
}

.value-item strong {
  font-size: 18px;
  color: var(--blue-dark);
}

.value-item span {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.stat-card {
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid var(--border-color);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-main);
}

/* Tech Styles */
.tech-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

.tech-icon {
  width: 64px;
  height: 64px;
  background-color: rgba(243, 123, 29, 0.1);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tech-icon::after {
  content: '';
  width: 32px;
  height: 32px;
  background-color: var(--primary-color);
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>') center/contain no-repeat;
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>') center/contain no-repeat;
}

.tech-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.tech-card p {
  color: var(--text-secondary);
  font-size: 14px;
}

/* Solutions Styles */
.solution-card {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s;
  cursor: pointer;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.solution-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s;
}

.solution-card:hover .solution-img {
  transform: scale(1.05);
}

.solution-content {
  padding: 25px;
  position: relative;
  background: white;
}

.solution-content h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.solution-content p {
  color: var(--text-secondary);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* News Styles */
.news-featured {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.news-featured:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  transform: translateY(-5px);
}
.news-img {
  height: 250px;
  background-size: cover;
  background-position: center;
}
.news-content-box {
  padding: 30px;
}
.news-date {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}
.news-content-box h3 {
  font-size: 22px;
  margin-bottom: 15px;
  line-height: 1.4;
}
.news-content-box p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.read-more {
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 15px;
}
.read-more:hover {
  color: var(--primary-color);
}

.news-list-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.02);
  transition: all 0.3s;
  cursor: pointer;
  flex: 1;
}
.news-list-item:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  transform: translateX(5px);
}
.news-date-box {
  min-width: 80px;
  height: 80px;
  background: var(--bg-light);
  border-radius: 8px;
  margin-right: 20px;
  border: 1px solid var(--border-color);
}
.news-date-box .day {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}
.news-date-box .month {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 5px;
}
.news-text h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--blue-dark);
  transition: color 0.3s;
}
.news-list-item:hover .news-text h4 {
  color: var(--primary-color);
}
.news-text p {
  font-size: 14px;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Case Styles */
.case-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s;
}

.case-card:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  transform: translateX(5px);
}

.case-date {
  min-width: 90px;
  height: 90px;
  background-color: var(--bg-light);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  border: 1px solid var(--border-color);
  color: var(--blue-dark);
}

.case-date .day {
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: var(--primary-color);
}

.case-date .month {
  font-size: 14px;
  margin-top: 5px;
}

.case-info h3 {
  font-size: 20px;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.case-card:hover .case-info h3 {
  color: var(--primary-color);
}

.case-info p {
  color: var(--text-secondary);
  font-size: 15px;
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
