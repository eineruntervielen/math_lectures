import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sketch',
    name: 'Sketch',
    component: () => import('../views/Sketch.vue')
  },
  {
    path: '/MA1',
    name: 'MA1',
    component: () => import(/* webpackChunkName: "about" */ '../views/MA1.vue')
  },
  {
    path: '/MA1/Mengenlehre',
    name: 'MA1_Mengenlehre',
    component: () => import(/* webpackChunkName: "about" */ '../views/MA1/Mengenlehre.vue')
  },
  {
    path: '/MA1/Aussagenlogik',
    name: 'MA1_Aussagenlogik',
    component: () => import(/* webpackChunkName: "about" */ '../views/MA1/Aussagenlogik.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
