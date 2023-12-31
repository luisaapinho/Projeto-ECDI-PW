import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPageView from '@/views/LandingPageView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CuriositiesView from '@/views/CuriositiesView.vue'
import LoginView from '@/views/LoginView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PageBlockedView from '@/views/PageBlockedView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView

    },

    {
      path: '/curiosities',
      name: 'curiosities',
      component: CuriositiesView

    },

    {
      path: '/login',
      name: 'login',
      component: LoginView

    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView

    },
    {
      path: "/:pathMatch(.*)",
      name: "pagenotfound",
      component: PageNotFoundView
    },

    {
      path: '/pageBlocked',
      name: 'pageblocked',
      component: PageBlockedView

    },

  ]
})

export default router
