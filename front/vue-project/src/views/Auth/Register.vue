<template>
  <div class="auth-page flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
    <!-- Top App Bar -->
    <div class="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/90 backdrop-blur-md">
      <h2 class="text-lg font-bold text-center flex-1">Password Master</h2>
    </div>

    <!-- Headline -->
    <div class="flex flex-col px-4 pt-4 pb-6">
      <h1 class="text-[32px] font-bold text-center mb-2">Créer un compte</h1>
      <p class="text-base text-center text-slate-500 dark:text-text-secondary">
        Apprenez à sécuriser votre vie numérique et maîtrisez vos mots de passe.
      </p>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitRegister" class="flex flex-col gap-5 px-4 pb-8">
      <!-- Name -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Nom</span>
        <input v-model="name" type="text" placeholder="Votre nom"
               class="form-input h-14 rounded-lg border p-[15px] focus:ring-2 focus:ring-primary"/>
      </label>

      <!-- Email -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Email</span>
        <input v-model="email" type="email" placeholder="exemple@email.com"
               class="form-input h-14 rounded-lg border p-[15px] focus:ring-2 focus:ring-primary"/>
      </label>

      <!-- Password -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Mot de passe</span>
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Votre mot de passe"
            @input="checkStrength"
            class="form-input h-14 w-full rounded-lg border p-[15px] pr-12 focus:ring-2 focus:ring-primary"
          />
          <button type="button" @click="showPassword = !showPassword"
                  class="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-primary">
            <span class="material-symbols-outlined">
              {{ showPassword ? 'visibility' : 'visibility_off' }}
            </span>
          </button>
        </div>
        <!-- Strength bar -->
        <div class="flex gap-1 mt-1">
          <div v-for="i in 4" :key="i" class="h-1.5 flex-1 rounded-full"
               :class="i <= strengthLevel ? strengthColor : 'bg-slate-200 dark:bg-slate-700'"></div>
        </div>
        <p class="text-xs text-slate-500 dark:text-text-secondary">Force : {{ strengthText }}</p>
      </label>

      <!-- Confirm -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Confirmer le mot de passe</span>
        <input v-model="passwordConfirm" type="password" placeholder="Répétez le mot de passe"
               class="form-input h-14 rounded-lg border p-[15px] focus:ring-2 focus:ring-primary"/>
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
      <button type="submit" :disabled="loading"
              class="h-14 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-all">
        S'inscrire
      </button>
    </form>

    <div class="px-4 pb-8 text-center mt-auto">
      <p class="text-sm text-slate-500">Déjà membre ?
        <router-link to="/login" class="text-primary font-bold hover:underline ml-1">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref(null)

// Force du mot de passe
const strengthLevel = ref(0)
const strengthText = ref('Faible')
const strengthColor = computed(() => {
  switch (strengthLevel.value) {
    case 1: return 'bg-red-500'
    case 2: return 'bg-orange-500'
    case 3: return 'bg-yellow-400'
    case 4: return 'bg-green-500'
    default: return 'bg-slate-200 dark:bg-slate-700'
  }
})

const checkStrength = () => {
  const val = password.value
  let score = 0
  if (val.length >= 8) score++
  if (/[A-Z]/.test(val)) score++
  if (/[0-9]/.test(val)) score++
  if (/[^A-Za-z0-9]/.test(val)) score++
  strengthLevel.value = score
  switch (score) {
    case 0:
    case 1: strengthText.value = 'Faible'; break
    case 2: strengthText.value = 'Moyen'; break
    case 3: strengthText.value = 'Fort'; break
    case 4: strengthText.value = 'Très fort'; break
  }
}

const submitRegister = async () => {
  error.value = null

  if (!name.value.trim()) {
    error.value = "Le nom est requis."
    return
  }
  if (!email.value.trim()) {
    error.value = "L'email est requis."
    return
  }
  if (!password.value.trim()) {
    error.value = "Le mot de passe est requis."
    return
  }
  if (password.value !== passwordConfirm.value) {
    error.value = "Les mots de passe ne correspondent pas."
    return
  }

  loading.value = true
  try {
    await auth.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirm.value
    })
  } catch (e) {
    error.value = auth.errors?.message || auth.errors || "Erreur lors de l'inscription"
  } finally {
    loading.value = false
  }
}
</script>
