import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nft-finance',
      name: 'nft-finance',
      component: () => import('../views/NFTFinance.vue'),
    },
    {
      path: '/citizen-forum',
      name: 'citizen-forum',
      component: () => import('../views/CitizenForum.vue'),
    },
    {
      path: '/event-plaza',
      name: 'event-plaza',
      component: () => import('../views/EventPlaza.vue'),
    },
  ],
})

export default router
