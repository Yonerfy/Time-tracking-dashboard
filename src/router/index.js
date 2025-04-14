import { createRouter, createWebHistory } from 'vue-router'
import WeeklyView from '../views/WeeklyView.vue'
import HomeView from '../views/HomeView.vue'
import MonthlyView from '../views/MonthlyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: WeeklyView,
    },
    {
      path: '/monthly',
      name: 'monthly',
      component: MonthlyView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
