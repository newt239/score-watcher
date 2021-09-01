import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config.vue')
  }, {
    path: '/display',
    name: 'Display',
    component: () => import('../views/Display.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
