<script setup>


</script>


<template>
  <div
    class="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen flex flex-col items-center justify-center p-4 auth-page"
  >
    <!-- Main Container -->
    <div class="w-full max-w-[480px] flex flex-col gap-6">
      <!-- Hero -->
      <div class="flex flex-col items-center gap-4">
        <!-- Logo -->
        <div
          class="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-white/10 relative"
        >
          <div
            class="w-full h-full bg-center bg-no-repeat bg-cover"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK1YpvJXGShsXk5JKoYAqke9QHChkt0rbSRNEYZoTxgUhYL7cfxGFE4jgrFkAmJWOdszLRP4wf79-AzEd-20WMtwDTVgLQBELQ8gntL4caxW1AvXZKO32SwXc33l7-Qgdt3WXFycZssh6RoEhdhTjrOYLfaw8I3VJnD9ZDBXaDeVZnLUI70ez3DB4SjfOPBT51jX66drPk8BxFxOms7Eqpm8L8dLhUDUUa4SgbqzpfYRkyZOfBSOOXUavEoaEqGyHLNIUnEcx6Cd0");'
          >
            <div class="absolute inset-0 bg-primary/40 mix-blend-overlay"></div>
          </div>
        </div>

        <!-- Title -->
        <div class="text-center">
          <h1 class="text-[32px] font-bold tracking-tight text-slate-900 dark:text-white">
            Enter the Vault
          </h1>
          <p class="text-slate-500 dark:text-[#92a4c9] pt-2">
            Secure your access to continue the game
          </p>
        </div>
      </div>

      <!-- Form -->
      <div
        class="flex flex-col gap-5 bg-white dark:bg-[#1A2235]/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-white/5 shadow-xl"
      >
        <!-- Email -->
        <label class="flex flex-col gap-2">
          <p class="text-sm font-medium">Email Address</p>
          <div class="relative group">
            <span
              class="material-symbols-outlined absolute left-4 inset-y-0 flex items-center text-[#92a4c9] group-focus-within:text-primary"
            >
              mail
            </span>
            <input
              type="email"
              placeholder="player@example.com"
              class="form-input h-14 w-full pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-[#232f48] border border-slate-200 dark:border-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </label>

        <!-- Password -->
        <label class="flex flex-col gap-2">
          <p class="text-sm font-medium">Password</p>
          <div class="relative group">
            <span
              class="material-symbols-outlined absolute left-4 inset-y-0 flex items-center text-[#92a4c9] group-focus-within:text-primary"
            >
              lock
            </span>
            <input
              type="password"
              placeholder="••••••••"
              class="form-input h-14 w-full pl-12 pr-12 rounded-lg bg-slate-50 dark:bg-[#232f48] border border-slate-200 dark:border-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button
              type="button"
              class="absolute right-4 inset-y-0 flex items-center text-[#92a4c9] hover:text-white"
            >
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>

          <div class="flex justify-end pt-1">
            <a class="text-primary text-sm font-medium hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
        </label>

        <!-- Submit -->
        <button
          class="h-14 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Connexion
          <span class="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>

        <!-- Divider -->
        <div class="relative py-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div class="relative flex justify-center">
            <span
              class="bg-white dark:bg-[#151c2b] px-3 text-xs font-medium text-slate-500 uppercase rounded-full"
            >
              Or
            </span>
          </div>
        </div>

        <!-- Google -->
        <button
          class="h-12 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 font-medium text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <img class="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" />
          Connexion avec Google
        </button>
      </div>

      <!-- Footer -->
      <div class="text-center text-sm text-slate-500">
        New player ?
        <a class="text-primary font-bold hover:underline ml-1">
          Create an account
        </a>
      </div>

      <!-- Security -->
      <div class="flex justify-center items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
        <span class="material-symbols-outlined text-[18px]">verified_user</span>
        <span class="text-xs font-medium">Secured by GameGuard</span>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>