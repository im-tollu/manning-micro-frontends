import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'
import SignIn from '@/views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  routes
})

export default router
