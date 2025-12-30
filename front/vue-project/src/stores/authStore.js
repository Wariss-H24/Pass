import { defineStore } from 'pinia'
import api from '@/utils/axiosConfig'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    token: sessionStorage.getItem('token') || null,
    loading: false,
    errors: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async register(form) {
      this.loading = true
      this.errors = null
      
      try {
        await api.post('/register', form)
        router.push({ name: 'login' })
      } catch (error) {
        this.errors = error.response?.data?.errors || {
          message: error.response?.data?.message,
        }
      } finally {
        this.loading = false
      }
    },

    async login(form) {
      this.loading = true
      this.errors = null

      try {
        const { data } = await api.post('/login', form)
        this.token = data.token
        this.user = data.user

        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('user', JSON.stringify(data.user))

        router.push({ name: 'dashboard' })
      } catch (error) {
        this.errors = error.response?.data?.errors || {
          message: error.response?.data?.message,
        }
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await api.post('/logout')
      } catch (e) {
        // Même si ça échoue, on déconnecte localement
      }

      this.token = null
      this.user = null

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')

      router.push({ name: 'login' })
    },
  },
})
