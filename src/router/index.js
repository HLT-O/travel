import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/customization',
    name: '定制旅游',
    component: () => import('../views/Customization.vue')
  },
  {
    path: '/destination',
    name: '目的地',
    component: () => import('../views/Destination.vue')
  },
  {
    path: '/news',
    name: '新闻中心',
    component: () => import('../views/News.vue')
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
