<script setup>


</script>


<template>





<div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
<!-- Main Container -->
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24">
<!-- TopAppBar -->
<header class="sticky top-0 z-10 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3">
<div class="relative flex size-10 shrink-0 items-center overflow-hidden rounded-full ring-2 ring-primary/20">
<img alt="Portrait of a user smiling" class="h-full w-full object-cover" data-alt="Portrait of a user smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7dpz3MiQdAQnHI1PrAEgN_N4fol1vQTFpAFjDrEGJNzgQ7n96OofOLZNZ73PXYclDgw3IJ_uQIoJHM4MfhZgSrXhlYGiQUd7q612nxdAt-rNmQIuwNpXRSJnqErUPY0PDDml-QoNhMu6itHH_mOjXbfiHsGIBIyftpgLoOXxxWNhXnCuHmbb4bUYHWKsQvvRRYaHgDguckjna7Kk82yeTR-uUIDBK7TUIlRVH15PbA7dwUxG2TSk9q9VcE5PMVZcOhgYNuioDtBo"/>
</div>
<div class="flex flex-col">
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">Bienvenue</span>
<h2 class="text-base font-bold leading-tight tracking-tight">Alexandre</h2>
</div>
</div>
<button class="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
<span class="material-symbols-outlined">settings</span>
</button>
</header>
<!-- Greeting & Context -->
<div class="px-4 pt-6 pb-2">
<h1 class="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                Votre progression <br/>
<span class="text-primary">Sécurité</span>
</h1>
</div>
<!-- Progress Widget -->
<div class="flex flex-col gap-3 p-4">
<div class="flex items-end justify-between">
<p class="text-slate-700 dark:text-slate-200 text-base font-medium leading-normal">40% Sécurisé</p>
<span class="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full">Niveau 4 / 10</span>
</div>
<div class="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-[#324467]">
<div class="h-full rounded-full bg-primary transition-all duration-500 ease-out" style="width: 40%;"></div>
</div>
<p class="text-slate-500 dark:text-[#92a4c9] text-xs font-normal leading-normal mt-1">
                Continuez ainsi ! Vous êtes en bonne voie pour devenir un expert.
            </p>
</div>
<!-- Current Level Card -->
<div class="p-4 pt-2">
<div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#192233] shadow-md dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform active:scale-[0.98]">
<!-- Background Image Overlay -->
<div class="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none bg-cover bg-center" data-alt="Abstract cyber security code pattern" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-eRs0D4BoqCffTEB085T_JzMsJznwd9vp8lPf0MpAxDYhGdoHPNv7XO3eUvff00btfJT9XJf-qW-TIFfLS7IIQbzXPh2-B69gxxGz8iEyfIej0cQlWbSMgCTKlmagpvLFaIt2IhGL_SH5KH-T1SbLlWdT421n6edHuoLi3lovG2_1ZJe-hRIt6b2xTPiA3Va5O_5xs5gWOnMtQhUy-GrP52S6A8rg_XD70OPpenRE-HyN8lM4NhzEsBY0M6V8SrRxi6Xp9cHpuSI');"></div>
<div class="relative z-10 flex flex-col p-5 gap-4">
<div class="flex justify-between items-start">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold uppercase tracking-wider text-primary">Niveau Actuel</span>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Les Majuscules</h3>
</div>
<span class="flex items-center gap-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-1 text-xs font-semibold text-yellow-700 dark:text-yellow-500">
<span class="material-symbols-outlined text-[16px]">pending</span>
                            En cours
                        </span>
</div>
<p class="text-sm text-slate-600 dark:text-[#92a4c9] leading-relaxed max-w-[90%]">
                        Apprenez à placer stratégiquement les majuscules pour renforcer exponentiellement la sécurité de vos mots de passe.
                    </p>
<div class="mt-2 flex items-center gap-4">
<div class="flex -space-x-2">
<div class="size-6 rounded-full bg-primary/20 ring-2 ring-white dark:ring-[#192233]"></div>
<div class="size-6 rounded-full bg-primary/40 ring-2 ring-white dark:ring-[#192233]"></div>
<div class="size-6 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 ring-2 ring-white dark:ring-[#192233]">
<span class="text-[10px] font-bold">+2</span>
</div>
</div>
<span class="text-xs text-slate-500 dark:text-slate-400">étapes restantes</span>
</div>
</div>
</div>
</div>
<!-- Primary Action Button (Sticky Bottom Style placement in flow, but could be fixed) -->
<div class="px-4 pb-6">
<button class="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 h-14 px-5 text-white shadow-lg shadow-blue-500/20 transition-all">
<span class="material-symbols-outlined">play_circle</span>
<span class="text-base font-bold tracking-wide">Reprendre le Jeu</span>
</button>
</div>
<div class="h-px bg-slate-200 dark:bg-slate-800 mx-4 mb-6"></div>
<!-- History Section -->
<div class="px-4 pb-4">
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Historique</h3>
<button class="text-xs font-medium text-primary hover:text-blue-400">Voir tout</button>
</div>
<div class="flex flex-col gap-3">
<!-- Completed Level 3 -->
<div class="flex items-center gap-4 rounded-xl bg-white dark:bg-[#192233] p-3 pr-4 shadow-sm border border-slate-100 dark:border-slate-800/50">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="flex flex-col flex-1 gap-0.5">
<p class="text-sm font-bold text-slate-900 dark:text-white">Niveau 3 : Dictionnaire</p>
<p class="text-xs text-slate-500 dark:text-[#92a4c9]">Éviter les mots courants</p>
</div>
<div class="flex items-center gap-0.5 text-yellow-500">
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
<!-- Completed Level 2 -->
<div class="flex items-center gap-4 rounded-xl bg-white dark:bg-[#192233] p-3 pr-4 shadow-sm border border-slate-100 dark:border-slate-800/50">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="flex flex-col flex-1 gap-0.5">
<p class="text-sm font-bold text-slate-900 dark:text-white">Niveau 2 : Caractères Spéciaux</p>
<p class="text-xs text-slate-500 dark:text-[#92a4c9]">Complexité accrue</p>
</div>
<div class="flex items-center gap-0.5 text-yellow-500">
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm text-slate-300 dark:text-slate-600">star</span>
</div>
</div>
<!-- Completed Level 1 -->
<div class="flex items-center gap-4 rounded-xl bg-white dark:bg-[#192233] p-3 pr-4 shadow-sm border border-slate-100 dark:border-slate-800/50">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="flex flex-col flex-1 gap-0.5">
<p class="text-sm font-bold text-slate-900 dark:text-white">Niveau 1 : La Longueur</p>
<p class="text-xs text-slate-500 dark:text-[#92a4c9]">Les bases de la sécurité</p>
</div>
<div class="flex items-center gap-0.5 text-yellow-500">
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
</div>
</div>
<!-- Bottom Navigation (Mobile App Feel) -->
<div class="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 dark:border-slate-800 bg-background-light/90 dark:bg-background-dark/95 backdrop-blur-md pb-safe pt-2">
<button class="flex flex-col items-center gap-1 p-2 text-primary">
<span class="material-symbols-outlined filled">dashboard</span>
<span class="text-[10px] font-medium">Accueil</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
<span class="material-symbols-outlined">sports_esports</span>
<span class="text-[10px] font-medium">Jeu</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
<span class="material-symbols-outlined">emoji_events</span>
<span class="text-[10px] font-medium">Trophées</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profil</span>
</button>
</div>
</div>
</div>

</template>


<style scoped>


</style>