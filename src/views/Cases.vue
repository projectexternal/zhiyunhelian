<script setup lang="ts">
const cases = [
  { 
    title: '上海虹口区养老服务指导中心', 
    desc: '打造区级智慧养老示范标杆。全面部署拾光“社区智慧养老云平台”，联通全区街道及居委服务站点，实现了日间照料、助餐助浴等核心业务的云端调度与数据可视化监管。', 
    date: '2023-10-15',
    img: '/images/photo-1576765608535-5f04d1e3f289_57f0158f91.jpg'
  },
  { 
    title: '济南历下区E联+智慧养老', 
    desc: '全场景数字养老解决方案落地。通过建设家庭养老床位，免费为独居、高龄长者安装生命体征雷达、防跌倒雷达及一键呼叫设备，结合24小时呼叫中心，打通了社区及居家急救体系。', 
    date: '2023-09-20',
    img: '/images/photo-1516383740770-fbcc5ccbece0_ea55d1578e.jpg'
  },
  { 
    title: '梧州认知症照护中心', 
    desc: '专业认知症长者照护新模式。引入拾光自主研发的“长者认知能力初筛及干预系统”，通过沉浸式光影游戏、益智桌面终端等科技手段，延缓认知衰退，同时配合专业防走失手环。', 
    date: '2023-08-05',
    img: '/images/photo-1581579205556-320d57185012_ed03fde1a5.jpg'
  },
  { 
    title: '南京市长护险服务示范区', 
    desc: '长护险定点机构全流程数字化。长护人员上门打卡签到、面部识别核身、服务流程录音录像等功能深度整合，极大地提高了长护险资金使用的透明度和审计效率。', 
    date: '2023-07-12',
    img: '/images/photo-1505751172876-fa1923c5c528_b9a60fb30c.jpg'
  },
];
</script>

<template>
  <div class="page-wrapper">
    <div class="page-banner">
      <h1>项目案例</h1>
    </div>
    
    <div class="container" style="padding: 80px 0;">
      <h2 style="text-align: center; margin-bottom: 20px;">635+ 全国项目落地经验</h2>
      <p class="section-subtitle" style="text-align: center; color: var(--text-secondary); margin-bottom: 60px;">丰富的实战经验与扎实的落地能力，铸就行业标杆</p>
      
      <div class="case-list flex-col gap-8">
        <div class="case-item grid grid-cols-2 gap-8 items-center" v-for="(c, idx) in cases" :key="idx" :class="{ 'flex-row-reverse': idx % 2 !== 0 }">
          <div class="case-img-wrap">
            <div class="case-img" :style="{ backgroundImage: `url(${c.img})` }"></div>
            <div class="case-date-badge">
              <span class="day">{{ c.date.split('-')[2] }}</span>
              <span class="month">{{ c.date.split('-')[0] }}-{{ c.date.split('-')[1] }}</span>
            </div>
          </div>
          <div class="case-content">
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
            <button class="btn btn-outline" style="margin-top: 20px;">了解项目详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 350px;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url('/images/photo-1450101499163-c8848c66cb85_fc2bfe095d.jpg') center/cover no-repeat;
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

.case-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.case-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0,0,0,0.08);
}
.flex-row-reverse .case-img-wrap {
  grid-column: 2;
  grid-row: 1;
}
.flex-row-reverse .case-content {
  grid-column: 1;
  grid-row: 1;
}

.case-img-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}
.case-img {
  height: 350px;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s;
}
.case-item:hover .case-img {
  transform: scale(1.05);
}
.case-date-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  color: var(--blue-dark);
}
.case-date-badge .day {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}
.case-date-badge .month {
  display: block;
  font-size: 14px;
  margin-top: 5px;
}

.case-content {
  padding: 0 20px;
}
.case-content h3 {
  font-size: 28px;
  color: var(--blue-dark);
  margin-bottom: 20px;
}
.case-content p {
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}
</style>
