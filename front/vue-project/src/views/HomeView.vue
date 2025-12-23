<script setup>
</script>

<template>
  <div
    class="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white antialiased overflow-x-hidden"
  >
    <div class="relative flex min-h-screen w-full flex-col justify-between overflow-hidden">
      <!-- Header -->
      <header class="flex items-center justify-between p-4 z-10">
        <div class="flex items-center gap-2 text-primary">
          <span class="material-symbols-outlined !text-[28px]">lock</span>
          <span class="font-bold text-lg tracking-tight text-[#111418] dark:text-white">
            PassMaster
          </span>
        </div>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-outlined">settings</span>
        </button>
      </header>

      <!-- Main -->
      <main class="flex-1 flex flex-col items-center justify-center px-6 py-4 z-10">
        <!-- Hero -->
        <div class="relative w-full max-w-[320px] aspect-square mb-8">
          <div
            class="absolute inset-0 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>

          <div
            class="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center border border-white/10"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb3c97xlHHczbVnQZG8konl-HLiB7tZHA2GDHpHpzi7zNJ2ETWbxQytV4ldcfHf4WVDrd8dWgZskkvwf0qkeHzRWFJK0ru2oWBS24dhs08WWsIbQunU3MW8QYgQFFJns0MtuVpeSsZrYiJ_b6HrhLh5dCWrToBNZww8jg30JLMc_IL9-PvTSlrkSUc3mtCt8PE54Gd4xgZGQSq5djwS4NuW3xH0r060Eij7KVnqeFjlhdA-m4zl-vGx27Cbndl3C8kg4DbV2nR06c');"
          ></div>

          <!-- Badge -->
          <div
            class="absolute -bottom-4 right-4 bg-background-light dark:bg-[#1a2333] p-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-200 dark:border-gray-700"
          >
            <div class="bg-primary/10 p-2 rounded-lg text-primary">
              <span class="material-symbols-outlined !text-[20px]">shield</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                Sécurité
              </span>
              <span class="block text-xs font-bold">Niveau 1</span>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="text-center max-w-sm space-y-4">
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            Maître du <br />
            <span class="text-primary">Mot de Passe</span>
          </h1>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Transformez la cybersécurité en un jeu d'enfant. Apprenez à créer des
            codes invincibles, niveau par niveau.
          </p>
        </div>
      </main>

      <!-- Footer -->
      <footer class="p-6 pb-8">
        <div class="flex flex-col gap-4 max-w-md mx-auto">
          <button
            class="h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            Commencer l'aventure
            <span
              class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
            >
              arrow_forward
            </span>
          </button>

          <button
            class="h-12 text-gray-600 dark:text-gray-400 font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Déjà un compte ? Se connecter
          </button>
        </div>

        <div class="h-2"></div>
      </footer>

      <!-- Background pattern -->
      <div
        class="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style="background-image: radial-gradient(#999 1px, transparent 1px); background-size: 24px 24px;"
      ></div>
    </div>
  </div>
</template>
