import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: '首页', component: Home, meta: { title: '首页' } },
  { path: '/about', name: '关于拾光', component: () => import('../views/About.vue'), meta: { title: '关于拾光' } },
  { path: '/solutions', name: '解决方案', component: () => import('../views/Solutions.vue'), meta: { title: '解决方案' } },
  { path: '/cases', name: '项目案例', component: () => import('../views/Cases.vue'), meta: { title: '项目案例' } },
  { path: '/news', name: '新闻资讯', component: () => import('../views/News.vue'), meta: { title: '新闻资讯' } },
  { path: '/contact', name: '联系我们', component: () => import('../views/Contact.vue'), meta: { title: '联系我们' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
