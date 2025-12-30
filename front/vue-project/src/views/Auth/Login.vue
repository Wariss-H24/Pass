<template>
  <div class="auth-page flex flex-col min-h-screen items-center justify-center p-4 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
    <div class="w-full max-w-md flex flex-col gap-6">
      <!-- Hero -->
      <div class="flex flex-col items-center gap-4">
        <div class="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-white/10 relative">
          <div class="w-full h-full bg-center bg-no-repeat bg-cover"
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK1YpvJXGShsXk5JKoYAqke9QHChkt0rbSRNEYZoTxgUhYL7cfxGFE4jgrFkAmJWOdszLRP4wf79-AzEd-20WMtwDTVgLQBELQ8gntL4caxW1AvXZKO32SwXc33l7-Qgdt3WXFycZssh6RoEhdhTjrOYLfaw8I3VJnD9ZDBXaDeVZnLUI70ez3DB4SjfOPBT51jX66drPk8BxFxOms7Eqpm8L8dLhUDUUa4SgbqzpfYRkyZOfBSOOXUavEoaEqGyHLNIUnEcx6Cd0");'>
            <div class="absolute inset-0 bg-primary/40 mix-blend-overlay"></div>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-[32px] font-bold tracking-tight">Enter the Vault</h1>
          <p class="text-slate-500 dark:text-[#92a4c9] pt-2">Secure your access to continue the game</p>
        </div>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-5 bg-white dark:bg-[#1A2235]/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-white/5 shadow-xl">
        <!-- Email -->
        <label class="flex flex-col gap-2">
          <p class="text-sm font-medium">Email</p>
          <input v-model="email" type="email" placeholder="player@example.com"
                 class="form-input h-14 w-full rounded-lg bg-slate-50 dark:bg-[#232f48] border border-slate-200 dark:border-none pl-4 pr-4 focus:ring-2 focus:ring-primary"/>
        </label>

        <!-- Password -->
        <label class="flex flex-col gap-2">
          <p class="text-sm font-medium">Mot de passe</p>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="password"
                   placeholder="••••••••"
                   class="form-input h-14 w-full rounded-lg bg-slate-50 dark:bg-[#232f48] border border-slate-200 dark:border-none pl-4 pr-12 focus:ring-2 focus:ring-primary"/>
            <button type="button" @click="showPassword = !showPassword"
                    class="absolute right-4 inset-y-0 flex items-center text-[#92a4c9] hover:text-white">
              <span class="material-symbols-outlined">{{ showPassword ? 'visibility' : 'visibility_off' }}</span>
            </button>
          </div>
        </label>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm mb-2">
          <template v-if="typeof error === 'string'">
            {{ error }}
          </template>
          <template v-else>
            <ul>
              <li v-for="(msg, key) in error" :key="key">{{ msg[0] }}</li>
            </ul>
          </template>
        </p>

        <!-- Submit -->
        <button @click="submitLogin" :disabled="loading"
                class="h-14 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          Connexion
          <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <!-- Divider -->
        <div class="relative py-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white dark:bg-[#151c2b] px-3 text-xs font-medium text-slate-500 uppercase rounded-full">Ou</span>
          </div>
        </div>

        <!-- Google -->
        <button class="h-12 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 font-medium text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
          <img class="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" />
          Se connecter avec Google
        </button>
      </div>

      <!-- Footer -->
      <div class="text-center text-sm text-slate-500 mt-2">
        Nouveau joueur ?
        <router-link to="/register" class="text-primary font-bold hover:underline ml-1">Créer un compte</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref(null)
const loading = ref(false)

const auth = useAuthStore()

const submitLogin = async () => {
  error.value = null

  if (!email.value.trim()) {
    error.value = "L'email est requis."
    return
  }
  if (!password.value.trim()) {
    error.value = "Le mot de passe est requis."
    return
  }

  loading.value = true
  try {
    await auth.login({ email: email.value, password: password.value })
  } catch (e) {
    error.value = auth.errors?.message || auth.errors || 'Email ou mot de passe incorrect'
  } finally {
    loading.value = false
  }
}
</script>
