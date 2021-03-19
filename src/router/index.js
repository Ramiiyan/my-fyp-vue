import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArmController from '../views/ArmController.vue'
import ArmMonitor from '../views/ArmMonitor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/ArmMonitor',
    name:'ArmMonitor',
    component: ArmMonitor
  },
  {
    path: '/ArmController',
    name: 'ArmController',
    component: ArmController
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
