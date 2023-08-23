import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import ShelfView from '@/views/ShelfView.vue'
// import SessionsView from '@/views/SessionsView.vue'
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
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    }
    // {
    //   path: '/library',
    //   name: 'ShelfView',
    //   component: ShelfView
    // },
    // {
    //   path: '/sessions',
    //   name: 'SessionsView',
    //   component: SessionsView
    // }
  ]
})

router.beforeEach(authGaurd)

export default router
