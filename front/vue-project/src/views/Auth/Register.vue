<template>
  <div
    class="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white auth-page"
  >
    <!-- Top App Bar -->
    <div
      class="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/90 backdrop-blur-md"
    >
      <h2
        class="text-slate-900 text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12"
      >
        Password Master
      </h2>
    </div>

    <!-- Headline -->
    <div class="flex flex-col px-4 pt-4 pb-6">
      <h1
        class="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center mb-2"
      >
        Créer un compte
      </h1>
      <p
        class="text-slate-500 dark:text-text-secondary text-base text-center"
      >
        Apprenez à sécuriser votre vie numérique et maîtrisez vos mots de passe.
      </p>
    </div>

    <!-- Form -->
    <form class="flex flex-col gap-5 px-4 pb-8" @submit.prevent>
      <!-- Email -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Email</span>
        <input
          type="email"
          placeholder="exemple@email.com"
          class="form-input h-14 rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark p-[15px] text-base transition-all focus:ring-2 focus:ring-primary/50"
        />
      </label>

      <!-- Password -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Mot de passe</span>

        <div class="relative">
          <input
            type="password"
            placeholder="Votre mot de passe"
            class="form-input h-14 w-full rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark p-[15px] pr-12 transition-all focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="button"
            class="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-primary"
          >
            <span class="material-symbols-outlined text-[24px]">
              visibility_off
            </span>
          </button>
        </div>

        <!-- Strength bar -->
        <div class="flex gap-1 mt-1">
          <div class="h-1.5 flex-1 rounded-full bg-red-500"></div>
          <div class="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div class="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div class="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <p class="text-xs text-slate-500 dark:text-text-secondary">
          Force : Faible
        </p>
      </label>

      <!-- Confirm -->
      <label class="flex flex-col gap-2">
        <span class="text-base font-medium">Confirmer le mot de passe</span>

        <div class="relative">
          <input
            type="password"
            placeholder="Répétez le mot de passe"
            class="form-input h-14 w-full rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark p-[15px] pr-12 transition-all focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="button"
            class="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-primary"
          >
            <span class="material-symbols-outlined text-[24px]">
              visibility_off
            </span>
          </button>
        </div>
      </label>

      <!-- Actions -->
      <div class="flex flex-col gap-4 mt-2">
        <button
          class="h-14 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 active:scale-[0.98] transition-all"
        >
          S'inscrire
        </button>

        <div class="flex items-center py-2">
          <div class="flex-grow border-t border-slate-300 dark:border-border-dark"></div>
          <span class="mx-4 text-sm text-slate-500">ou</span>
          <div class="flex-grow border-t border-slate-300 dark:border-border-dark"></div>
        </div>

        <button
          class="h-14 rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark font-medium hover:bg-slate-50 dark:hover:bg-[#1f2b40] transition-all flex items-center justify-center gap-3"
        >
          S'inscrire avec Google
        </button>
      </div>
    </form>

    <!-- Footer -->
    <div class="px-4 pb-8 text-center mt-auto">
      <p class="text-sm text-slate-500">
        Déjà membre ?
        <a class="text-primary font-bold hover:underline ml-1">
          Se connecter
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>

</script>
