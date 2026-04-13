<script setup lang="ts">
const newsList = [
  { title: '国家发改委：大力发展银发经济，推动智慧养老普及', desc: '在最新发布的文件中明确指出，需结合物联网、大数据等技术，实现居家及机构养老的智能化改造。拾光养老凭借软硬件一体化的优势，成为本次文件指导的积极响应者。', date: '2023-11-20', img: '/images/photo-1560250097-0b93528c311a_da4cbbab61.jpg' },
  { title: '多地出台新规：长护险覆盖面进一步扩大', desc: '关于长期护理保险制度的推进有了新进展，多地开始扩大试点范围。拾光自主研发的长护险管理系统已在10余个城市顺利上线，助力政府精准监管资金去向。', date: '2023-11-15', img: '/images/拾光.jpg' },
  { title: '第六届智慧养老高峰论坛在京成功举办', desc: '行业专家齐聚一堂，共同探讨“AI+养老”新模式的落地与可持续发展。拾光受邀出席并在大会上作了《数据驱动长者健康闭环》的主题演讲。', date: '2023-11-08', img: '/images/photo-1540553016722-983e48a2cd10_ddc0714fed.jpg' },
  { title: '2023年中国健康老龄化蓝皮书正式发布', desc: '报告显示，数字基础设施建设已成为改善老年人生活质量的核心要素。长者对智能紧急呼叫及防跌倒监测的需求激增了300%。', date: '2023-10-30', img: '/images/photo-1507679799987-c73779587ccf_e33994cd83.jpg' },
];
</script>

<template>
  <div class="page-wrapper">
    <div class="page-banner">
      <h1>新闻资讯</h1>
    </div>
    
    <div class="container" style="padding: 80px 0;">
      <h2 style="text-align: center; margin-bottom: 20px;">掌握前沿动态</h2>
      <p class="section-subtitle" style="text-align: center; color: var(--text-secondary); margin-bottom: 60px;">洞悉国家政策风向，见证拾光行业足迹</p>
      
      <!-- 头条新闻 -->
      <div class="hero-news grid grid-cols-2 gap-0" style="margin-bottom: 60px;">
        <div class="hero-img" :style="{ backgroundImage: `url(${newsList[0].img})` }"></div>
        <div class="hero-content">
          <span class="news-date-tag">{{ newsList[0].date }}</span>
          <h3>{{ newsList[0].title }}</h3>
          <p>{{ newsList[0].desc }}</p>
          <button class="btn btn-primary" style="margin-top: 30px;">阅读全文全文</button>
        </div>
      </div>

      <!-- 新闻列表 -->
      <div class="grid grid-cols-3 gap-8">
        <div class="news-card" v-for="news in newsList.slice(1)" :key="news.title">
          <div class="news-img-top" :style="{ backgroundImage: `url(${news.img})` }"></div>
          <div class="news-body">
            <span class="news-date-small">{{ news.date }}</span>
            <h4>{{ news.title }}</h4>
            <p>{{ news.desc }}</p>
            <a href="#" class="read-more">了解详情 &rarr;</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 350px;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url('/images/photo-1504384308090-c894fdcc538d_76a941a3d7.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: var(--nav-height);
}

.page-banner h1 {
  font-size: 42px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  color: white;
}

.hero-news {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}
.hero-img {
  min-height: 400px;
  background-size: cover;
  background-position: center;
}
.hero-content {
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.news-date-tag {
  display: inline-block;
  background: rgba(243, 123, 29, 0.1);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  width: max-content;
}
.hero-content h3 {
  font-size: 32px;
  color: var(--blue-dark);
  margin-bottom: 20px;
  line-height: 1.4;
}
.hero-content p {
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}
.news-img-top {
  height: 220px;
  background-size: cover;
  background-position: center;
}
.news-body {
  padding: 25px;
}
.news-date-small {
  color: var(--primary-color);
  font-size: 13px;
  margin-bottom: 10px;
  display: block;
}
.news-body h4 {
  font-size: 18px;
  color: var(--blue-dark);
  margin-bottom: 15px;
  line-height: 1.4;
}
.news-body p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.read-more {
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s;
}
.read-more:hover {
  color: var(--primary-color);
}
</style>
