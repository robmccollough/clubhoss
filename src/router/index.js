import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Club from '@/views/Club.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

import { authGaurd } from './guards/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: authGaurd
    },
    {
      path: '/club/:name',
      name: 'Club',
      component: Club,
      beforeEnter: authGaurd
    }
  ]
})

export default router
