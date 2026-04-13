<script setup lang="ts">
const solutions = [
  {
    title: "社区领域",
    en: "Community Care",
    desc: "打造15分钟养老服务圈，构建社区嵌入式养老枢纽，为周边长者提供日间照料、助餐助浴等综合服务。",
    img: "/images/photo-1576765608535-5f04d1e3f289_1e45efd1a3.jpg",
  },
  {
    title: "机构领域",
    en: "Nursing Facility",
    desc: "赋能传统养老机构进行数字化转型，实现人员管理、照护计划、智能设备联动的一体化高效运营。",
    img: "/images/photo-1516383740770-fbcc5ccbece0_d5616a014f.jpg",
  },
  {
    title: "居家领域",
    en: "Home-Based Care",
    desc: "通过家庭养老床位建设与智能终端部署，将专业照护延伸至长者家中，实现24小时安全守护。",
    img: "/images/photo-7910875498725ae44ed5ea7407ae3d5d.png",
  },
  {
    title: "长护领域",
    en: "Long Term Care",
    desc: "全流程数字化管理长护险服务，从评估分配、服务派单、过程监管到资金结算，确保服务精准合规。",
    img: "/images/photo-16b7023173fd589c0120141b9464cabd.png",
  },
  {
    title: "保险领域",
    en: "Insurance Area",
    desc: "携手大型险企，推出“保险+养老服务”创新产品，为客户提供保单权益之外的高端定制化养老管家服务。",
    img: "/images/photo-de83418c3be92201e288bb4a9b22d3b2.png",
  },
  {
    title: "个人C端",
    en: "Customer Pay",
    desc: "面向社会大众开放线上平台，长者及家属可一键预约专业上门照护、陪诊、清洁等市场化服务。",
    img: "/images/photo-1521791136064-7986c2920216_aa55f2c81e.jpg",
  },
];

const scenes = [
  {
    title: "安全管理 (Security)",
    desc: "利用物联网传感技术，实现防跌倒、防走失、紧急呼叫毫秒级响应。",
  },
  {
    title: "健康管理 (Healthy)",
    desc: "无感体征监测，结合远程医疗资源，为长者建立动态健康档案。",
  },
  {
    title: "照护管理 (Care)",
    desc: "标准化照护SOP系统，让每一次服务都可追溯、可评价、高标准。",
  },
  {
    title: "精神陪伴 (Accompany)",
    desc: "智能语音陪聊机器人与丰富的适老化文娱内容，充实长者精神生活。",
  },
];
</script>

<template>
  <div class="page-wrapper">
    <div class="page-banner">
      <h1>解决方案</h1>
    </div>

    <div class="container" style="padding: 80px 0">
      <h2 style="margin-bottom: 20px; text-align: center">六大核心业务领域</h2>
      <p
        class="section-subtitle"
        style="
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 60px;
        "
      >
        覆盖所有养老场景，提供全产业链数字化赋能
      </p>

      <div class="grid grid-cols-2 gap-8" style="margin-bottom: 80px">
        <div class="sol-card" v-for="sol in solutions" :key="sol.title">
          <div
            class="sol-img"
            :style="{ backgroundImage: `url(${sol.img})` }"
          ></div>
          <div class="sol-content">
            <h3>{{ sol.title }}</h3>
            <span>{{ sol.en }}</span>
            <p>{{ sol.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 四大场景模块 -->
      <div class="bg-gray" style="padding: 60px 40px; border-radius: 12px">
        <h2 style="margin-bottom: 40px; text-align: center">
          数字基建：支撑四大核心场景
        </h2>
        <div class="grid grid-cols-4 gap-8">
          <div
            class="scene-card"
            v-for="(scene, index) in scenes"
            :key="scene.title"
          >
            <div :class="['scene-icon', `scene-icon-${index + 1}`]"></div>
            <h4>{{ scene.title }}</h4>
            <p>{{ scene.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 350px;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)),
    url("/images/photo-1581579205556-320d57185012_a68a86a94f.jpg") center/cover
      no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: var(--nav-height);
}

.page-banner h1 {
  font-size: 42px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: white;
}

.sol-card {
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}
.sol-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
.sol-img {
  width: 40%;
  background-size: cover;
  background-position: center;
}
.sol-content {
  width: 60%;
  padding: 30px 25px;
}
.sol-content h3 {
  font-size: 22px;
  color: var(--blue-dark);
  margin-bottom: 5px;
}
.sol-content span {
  display: block;
  font-size: 13px;
  color: var(--primary-color);
  text-transform: uppercase;
  margin-bottom: 15px;
}
.sol-content p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.scene-card {
  background: white;
  padding: 40px 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
}
.scene-icon {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin: 0 auto 20px;
  opacity: 0.8;
}

.scene-icon-1 {
  width: 100px;
  height: 100px;
  background-image: url("/images/icon-security.png");
}
.scene-icon-2 {
  background-image: url("/images/icon-healthy.png");
}
.scene-icon-3 {
  background-image: url("/images/icon-care.png");
}
.scene-icon-4 {
  background-image: url("/images/icon-accompany.png");
}
.scene-card h4 {
  font-size: 18px;
  color: var(--blue-dark);
  margin-bottom: 15px;
}
.scene-card p {
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
