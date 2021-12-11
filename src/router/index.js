import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MA1',
    name: 'MA1',
    component: () => import(/* webpackChunkName: "about" */ '../views/MA1.vue')
  },
    {
    path: '/MA1/1_Mengenlehre',
    name: 'MA1_1_Mengenlehre',
    component: () => import(/* webpackChunkName: "about" */ '../views/MA1/1_Mengenlehre.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
