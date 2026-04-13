<script setup lang="ts">
const stats = [
  { value: '124+', label: '软件著作权' },
  { value: '9+', label: '实用新型专利' },
  { value: '23省', label: '服务网络覆盖' },
  { value: '80+', label: '覆盖城市' },
  { value: '154', label: '区县' },
  { value: '635+', label: '全国项目' },
];

const values = [
  { title: '热爱', desc: 'Passion', text: '发自内心地热爱养老事业，热爱长者，把长者当成自己的家人。' },
  { title: '担当', desc: 'Responsibility', text: '勇于承担社会责任，为千万家庭解决养老后顾之忧。' },
  { title: '向阳而生', desc: 'Optimism', text: '保持积极乐观的心态，用阳光般的温暖照亮长者的晚年生活。' },
];
</script>

<template>
  <div class="page-wrapper">
    <div class="page-banner">
      <h1>关于拾光</h1>
    </div>
    
    <div class="container" style="padding: 80px 0;">
      <div class="grid grid-cols-2 gap-8 items-center" style="margin-bottom: 80px;">
        <div class="about-text">
          <h2 style="text-align: left; margin-bottom: 30px;">中国智慧养老领军企业</h2>
          <p style="font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 20px;">
            拾光养老成立于中国（上海）自由贸易试验区，定位为“中国智慧养老数字基建平台”。我们始终将“长者满意度永远排第一”作为企业宗旨。
          </p>
          <p style="font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 20px;">
            公司拥有行业领先的自研数字养老系统与全系列智能硬件，打造了涵盖“安全、健康、照护、陪伴”四大核心场景的生态闭环，为政府、社区、机构、保险等不同业态提供全面、一体化的智慧养老解决方案。
          </p>
          <p style="font-size: 16px; color: var(--text-secondary); line-height: 1.8;">
            目前，拾光养老的服务网络已遍布全国23个省直辖市，落地超过635个项目，累计为数以百万计的中国长者送去了科技带来的关怀与温暖。
          </p>
        </div>
        <div class="about-img" style="background-image: url('/images/photo-1576765608535-5f04d1e3f289_115c8ec4db.jpg');"></div>
      </div>

      <!-- 企业理念 -->
      <h2 style="margin-bottom: 40px;">我们的核心价值观</h2>
      <div class="grid grid-cols-3 gap-8" style="margin-bottom: 80px;">
        <div class="value-card" v-for="val in values" :key="val.title">
          <div class="value-header">
            <h3>{{ val.title }}</h3>
            <span>{{ val.desc }}</span>
          </div>
          <p>{{ val.text }}</p>
        </div>
      </div>

      <!-- 核心数据 -->
      <div class="bg-gray" style="padding: 60px; border-radius: 12px;">
        <h2 style="margin-bottom: 40px;">核心数据</h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 350px;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url('/images/photo-1516383740770-fbcc5ccbece0_44b43ae834.jpg') center/cover no-repeat;
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

.about-img {
  height: 400px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.value-card {
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-top: 4px solid var(--primary-color);
  transition: transform 0.3s;
}
.value-card:hover {
  transform: translateY(-10px);
}
.value-header {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
}
.value-header h3 {
  font-size: 24px;
  margin-right: 10px;
  color: var(--blue-dark);
}
.value-header span {
  font-size: 14px;
  color: var(--text-secondary);
  text-transform: uppercase;
}
.value-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}
.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}
.stat-label {
  font-size: 16px;
  color: var(--text-main);
}
</style>
