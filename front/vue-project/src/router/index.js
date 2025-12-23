import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Historique from '@/views/Historique.vue'
import Gamepass from '@/views/Gamepass.vue'
import Profile from '@/views/Profile/Profile.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path : '/login',
      name : 'login',
      component : () => import('@/views/Auth/Login.vue')
    },
    {
      path : '/register',
      name : 'register',
      component : () => import('@/views/Auth/Register.vue')
    },
    {
      path : '/dashboard',
      name : 'dashboard',
      component : Dashboard
    },
    {
      path : '/profile',
      name : 'profile',
      component : Profile
    },
    {
      path : '/historique',
      name : 'historique',
      component : Historique
    },
    {
      path : '/gamepass',
      name : 'gamepass',
      component : Gamepass
    }
    ,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
