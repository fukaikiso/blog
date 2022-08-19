import Vue from 'vue'
import VueRouter from 'vue-router'
import FlyIndex from '../views/FlyIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: FlyIndex,
  },
  {
    path: '/wooden-knocker',
    name: 'woodenKnocker',
    component: () => import('../views/WoodenKnocker.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
