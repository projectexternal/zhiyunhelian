<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { ref, onMounted, onUnmounted } from 'vue';

const favicon = useFavicon()
favicon.value =  window.location.origin + '/favicon.ico'

console.log(favicon.value)

// Navigation State
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Navigation Data
const navItems = [
  { name: '首页', path: '/' },
  { name: '关于拾光', path: '/about' },
  { name: '解决方案', path: '/solutions' },
  { name: '项目案例', path: '/cases' },
  { name: '新闻资讯', path: '/news' },
  { name: '联系我们', path: '/contact' }
];

// Login/Register Dialog State (for ICP requirements)
const showAuthDialog = ref(false);
const authType = ref('login'); // 'login' | 'register'

const openAuth = (type: string) => {
  authType.value = type;
  showAuthDialog.value = true;
};
</script>

<template>
  <div class="app-wrapper">
    <!-- Header -->
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="container flex justify-between items-center header-inner">
        <div class="logo">
          <router-link to="/">
            <img src="/logo.png" alt="拾光养老" />
          </router-link>
        </div>
        <nav class="nav">
          <ul class="flex">
            <li v-for="item in navItems" :key="item.path">
              <router-link :to="item.path" active-class="active-link">{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="header-actions flex items-center gap-4">
          <!-- Login/Register for ICP requirement -->
          <div class="auth-buttons">
            <button class="btn btn-text auth-btn" @click="openAuth('login')">登录</button>
            <span class="auth-divider">|</span>
            <button class="btn btn-text auth-btn" @click="openAuth('register')">注册</button>
          </div>
          <button class="btn btn-primary" style="padding: 8px 20px;">服务热线：010-63637350</button>
        </div>
      </div>
    </header>

    <!-- Main Content Route View -->
    <router-view />

    <!-- Auth Dialog (Mock implementation for ICP) -->
    <div class="dialog-overlay" v-if="showAuthDialog" @click.self="showAuthDialog = false">
      <div class="dialog-content">
        <div class="dialog-header">
          <h3>{{ authType === 'login' ? '用户登录' : '账号注册' }}</h3>
          <button class="close-btn" @click="showAuthDialog = false">&times;</button>
        </div>
        <div class="dialog-body">
          <form @submit.prevent="showAuthDialog = false">
            <div class="form-group">
              <label>手机号 / 账号</label>
              <input type="text" placeholder="请输入您的账号" required />
            </div>
            <div class="form-group">
              <label>密码</label>
              <input type="password" placeholder="请输入密码" required />
            </div>
            <div class="form-group" v-if="authType === 'register'">
              <label>确认密码</label>
              <input type="password" placeholder="请再次输入密码" required />
            </div>
            <button type="submit" class="btn btn-primary w-full" style="margin-top: 15px;">
              {{ authType === 'login' ? '登 录' : '注 册' }}
            </button>
            <p class="auth-switch" @click="authType = authType === 'login' ? 'register' : 'login'">
              {{ authType === 'login' ? '还没有账号？点击注册' : '已有账号？点击登录' }}
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top grid grid-cols-4 gap-8">
          <div class="footer-col col-span-2">
            <img src="/bottomLogo.png" alt="拾光养老" class="footer-logo" />
            <p>中国智慧养老数字基建平台</p>
            <p>融合自研软件系统与智能硬件，为多业态提供一体化、全场景养老解决方案。</p>
          </div>
          <div class="footer-col">
            <h4>快速链接</h4>
            <ul>
              <li><router-link to="/about">关于拾光</router-link></li>
              <li><router-link to="/solutions">解决方案</router-link></li>
              <li><router-link to="/cases">项目案例</router-link></li>
              <li><router-link to="/news">新闻资讯</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>联系我们</h4>
            <p>全国服务热线：010-63637350</p>
            <p>总部地址：北京市朝阳区</p>
            <p>邮箱：contact@tianyucare.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 拾光养老版权所有. <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">沪ICP备xxxxxx号</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background-color: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.header-scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border-bottom: 1px solid var(--border-color);
}

.header-inner {
  height: 100%;
}

.logo img {
  height: 50px;
  object-fit: contain;
  transition: all 0.3s;
}

/* Nav Styles */
.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  font-size: 16px;
  font-weight: 500;
  color: white; /* Initial state on dark banner */
  position: relative;
  padding: 5px 0;
}

.header-scrolled .nav ul li a {
  color: var(--blue-dark);
}

.header-scrolled .nav ul li a:hover,
.header-scrolled .nav ul li a.active-link {
  color: var(--primary-color);
}

.nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s;
}

.nav ul li a:hover::after,
.nav ul li a.active-link::after {
  width: 100%;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  align-items: center;
  color: white;
}
.header-scrolled .auth-buttons {
  color: var(--blue-dark);
}
.auth-btn {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 15px;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s;
}
.auth-btn:hover {
  color: var(--primary-color);
}
.auth-divider {
  margin: 0 5px;
  opacity: 0.5;
}

/* Auth Dialog */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}
.dialog-content {
  background: white;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  overflow: hidden;
  animation: dialogFadeIn 0.3s ease;
}
@keyframes dialogFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.dialog-header {
  padding: 20px 25px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dialog-header h3 {
  font-size: 20px;
  margin: 0;
}
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-secondary);
}
.close-btn:hover {
  color: var(--text-main);
}
.dialog-body {
  padding: 25px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}
.form-group input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s;
}
.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
}
.w-full {
  width: 100%;
}
.auth-switch {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: var(--primary-color);
  cursor: pointer;
}
.auth-switch:hover {
  text-decoration: underline;
}

/* Footer Styles */
.footer {
  background-color: #15253e;
  color: rgba(255,255,255,0.7);
  padding: 80px 0 0;
}

.footer-logo {
  height: 50px;
  width: 50px;
  margin-bottom: 25px;
  /* filter: brightness(0) invert(1); */
}

.footer-col h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-col p {
  margin-bottom: 15px;
  line-height: 1.8;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul li a:hover {
  color: white;
  padding-left: 5px;
}

.footer-bottom {
  margin-top: 60px;
  padding: 25px 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  font-size: 14px;
}

.col-span-2 {
  grid-column: span 2;
}
</style>
