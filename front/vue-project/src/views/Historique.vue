<script setup>


</script>


<template>
<div class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top App Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 border-b border-gray-200 dark:border-[#232f48]">
<button class="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-[#232f48] transition-colors">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<h1 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Vos Victoires</h1>
</header>
<!-- Main Content List -->
<main class="flex-1 flex flex-col gap-6 px-4 py-6 pb-32">
<!-- Intro Text -->
<div class="flex flex-col gap-2 mb-2">
<p class="text-sm text-slate-500 dark:text-slate-400 text-center">
                    Retrouvez ici tous les mots de passe robustes que vous avez créés en terminant les niveaux.
                </p>
</div>
<!-- Card: Level 3 (Most Recent) -->
<div class="flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-transparent">
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
<span class="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[20px]">trophy</span>
</span>
<h3 class="text-base font-bold text-slate-900 dark:text-white">Niveau 3</h3>
</div>
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">Aujourd'hui</span>
</div>
<div class="relative w-full">
<label class="sr-only">Mot de passe niveau 3</label>
<div class="flex w-full items-stretch rounded-lg bg-gray-50 dark:bg-input-dark overflow-hidden ring-1 ring-gray-200 dark:ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all">
<input class="flex w-full min-w-0 flex-1 resize-none border-none bg-transparent h-12 px-4 text-base font-mono text-slate-900 dark:text-white focus:ring-0" readonly="" type="password" value="S0up3r!S3cur3"/>
<button class="text-slate-400 hover:text-primary flex items-center justify-center px-4 transition-colors">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
<button class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
<span class="material-symbols-outlined text-[18px]">vpn_key</span>
<span class="truncate">Définir comme mot de passe</span>
</button>
</div>
<!-- Card: Level 2 -->
<div class="flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-transparent">
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
<span class="flex items-center justify-center size-8 rounded-full bg-slate-100 dark:bg-[#232f48] text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[20px]">star</span>
</span>
<h3 class="text-base font-bold text-slate-900 dark:text-white">Niveau 2</h3>
</div>
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">Hier</span>
</div>
<div class="relative w-full">
<label class="sr-only">Mot de passe niveau 2</label>
<div class="flex w-full items-stretch rounded-lg bg-gray-50 dark:bg-input-dark overflow-hidden ring-1 ring-gray-200 dark:ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all">
<!-- Example of revealed password state -->
<input class="flex w-full min-w-0 flex-1 resize-none border-none bg-transparent h-12 px-4 text-base font-mono text-slate-900 dark:text-white focus:ring-0" readonly="" type="text" value="Chocolat#42!"/>
<button class="text-primary flex items-center justify-center px-4 transition-colors">
<span class="material-symbols-outlined">visibility_off</span>
</button>
</div>
</div>
<button class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
<span class="material-symbols-outlined text-[18px]">vpn_key</span>
<span class="truncate">Définir comme mot de passe</span>
</button>
</div>
<!-- Card: Level 1 -->
<div class="flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-transparent">
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
<span class="flex items-center justify-center size-8 rounded-full bg-slate-100 dark:bg-[#232f48] text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[20px]">star</span>
</span>
<h3 class="text-base font-bold text-slate-900 dark:text-white">Niveau 1</h3>
</div>
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">23 Oct</span>
</div>
<div class="relative w-full">
<label class="sr-only">Mot de passe niveau 1</label>
<div class="flex w-full items-stretch rounded-lg bg-gray-50 dark:bg-input-dark overflow-hidden ring-1 ring-gray-200 dark:ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all">
<input class="flex w-full min-w-0 flex-1 resize-none border-none bg-transparent h-12 px-4 text-base font-mono text-slate-900 dark:text-white focus:ring-0" readonly="" type="password" value="LapinBleu1"/>
<button class="text-slate-400 hover:text-primary flex items-center justify-center px-4 transition-colors">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
<button class="flex w-full primary cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
<span class="material-symbols-outlined text-[18px]">vpn_key</span>
<span class="truncate primary">Définir comme mot de passe</span>
</button>
</div>
</main>
<!-- Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-[#232f48] bg-white dark:bg-card-dark px-4 pb-3 pt-2 safe-area-bottom z-40">
<div class="flex gap-2 justify-around items-end">
<a class="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
<div class="flex h-6 items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-200">
<span class="material-symbols-outlined">sports_esports</span>
</div>
<p class="text-[10px] font-medium leading-normal tracking-[0.015em]">Jeu</p>
</a>
<a class="flex flex-1 flex-col items-center justify-end gap-1 text-primary" href="#">
<div class="flex h-6 items-center justify-center">
<span class="material-symbols-outlined fill-current font-variation-settings-fill">history</span>
</div>
<p class="text-[10px] font-medium leading-normal tracking-[0.015em]">Historique</p>
</a>
<a class="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
<div class="flex h-6 items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-200">
<span class="material-symbols-outlined">person</span>
</div>
<p class="text-[10px] font-medium leading-normal tracking-[0.015em]">Profil</p>
</a>
<a class="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
<div class="flex h-6 items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-200">
<span class="material-symbols-outlined">settings</span>
</div>
<p class="text-[10px] font-medium leading-normal tracking-[0.015em]">Réglages</p>
</a>
</div>
</nav>
</div>
</div>
</template>

<style scoped>
.font-variation-settings-fill {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
 }
/* Scrollbar custom */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #101622;
}
::-webkit-scrollbar-thumb {
  background: #232f48;
  border-radius: 4px;
}

/* Safe area iOS */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Material icon filled */
.font-variation-settings-fill {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>