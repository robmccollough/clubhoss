import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShelfView from '@/views/ShelfView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/library',
      name: 'ShelfView',
      component: ShelfView
    }
  ]
})

export default router
