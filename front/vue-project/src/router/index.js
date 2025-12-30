import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Historique from '@/views/Historique.vue'
import Gamepass from '@/views/Gamepass.vue'
import Profile from '@/views/Profile/Profile.vue'
import Dashboard from '@/views/Dashboard.vue'
import { useAuthStore } from '@/stores/authStore'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Auth/Register.vue')
  },
  {
    path: '/',
    name: 'acceuil',
    component: () => import('@/views/Acceuil.vue')
  },
  {
    path: '/app',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'dashboard', component: Dashboard },
      { path: 'profile', name: 'profile', component: Profile },
      { path: 'historique', name: 'historique', component: Historique },
      { path: 'gamepass', name: 'gamepass', component: Gamepass },
      { path: 'faq', name: 'faq', component: () => import('@/views/Faq.vue') },
      { path: 'about', name: 'about', component: () => import('../views/AboutView.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login' }
  }

  if ((to.name === 'login' || to.name === 'register') && auth.isAuthenticated) {
    return { name: 'dashboard' }
}
})

export default router
