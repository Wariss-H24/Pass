<script setup>


</script>


<template>



<div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Main Container -->
<div class="relative flex min-h-screen w-full flex-col pb-24">
<!-- Sticky Header (TopAppBar) -->
<div class="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-200 dark:border-gray-800">
<button class="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h2 class="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] pr-10">Mon Profil</h2>
</div>
<!-- Profile Header & Avatar -->
<div class="flex flex-col items-center pt-6 pb-2 px-4">
<div class="relative group">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-surface-light dark:border-surface-dark shadow-xl" data-alt="User avatar illustration of a futuristic digital security character" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUnsVV0K1XUwApQpU1B91CYhdRORTUoV1ptL7a6f2fHsSwhJuGPCF8zGC05RpMX1OMjPOaOX6zydLdSeqZIhQHcn1BQcMnl4c0j5vwjnZcIW_NGzYp91eaOlcsT2vnZKidpXGvg8gUE9wXrDGQo08oPLbuw8IaW-tMyF4M71A8Ic4-w0BPSiQnhQ-smWy9SgEkhWDs7O1a-_BpzI3AZ42qSpop8X2AsMsXmxAhW6sWL2JXGGAm9X_USgZYZptpXWZYyrfI8wHeNyg");'>
</div>
<button class="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined text-sm font-bold">edit</span>
</button>
</div>
<div class="mt-4 text-center">
<h1 class="text-2xl font-bold leading-tight tracking-tight">AlexSecurité123</h1>
<p class="text-slate-500 dark:text-[#92a4c9] text-sm font-medium mt-1">Membre depuis Mars 2023</p>
</div>
</div>
<!-- Gamification Dashboard (Combined Headline & ProgressBar) -->
<div class="px-4 mt-4">
<div class="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800">
<div class="flex items-center justify-between mb-3">
<div class="flex flex-col">
<span class="text-xs uppercase tracking-wider text-primary font-bold mb-1">Niveau Actuel</span>
<h3 class="text-lg font-bold leading-tight">Niveau 5: Maître</h3>
</div>
<div class="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">military_tech</span>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between text-xs font-medium text-slate-500 dark:text-[#92a4c9]">
<span>750 XP</span>
<span>1000 XP</span>
</div>
<div class="h-3 w-full rounded-full bg-gray-200 dark:bg-[#324467] overflow-hidden">
<div class="h-full rounded-full bg-primary" style="width: 75%;"></div>
</div>
<p class="text-xs text-right text-slate-400 mt-1">Plus que 250 XP pour le niveau Expert !</p>
</div>
</div>
</div>
<!-- Stats Grid (ProfileStats) -->
<div class="px-4 mt-6">
<h4 class="text-base font-bold mb-3 px-1">Statistiques</h4>
<div class="grid grid-cols-3 gap-3">
<!-- Stat 1 -->
<div class="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700/50 p-3 items-center text-center shadow-sm">
<div class="p-2 rounded-full bg-emerald-500/10 mb-1">
<span class="material-symbols-outlined text-emerald-500 text-xl">verified_user</span>
</div>
<p class="text-xl font-bold leading-none">12</p>
<p class="text-slate-500 dark:text-[#92a4c9] text-[10px] font-medium uppercase tracking-wide">Mots de passe</p>
</div>
<!-- Stat 2 -->
<div class="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700/50 p-3 items-center text-center shadow-sm">
<div class="p-2 rounded-full bg-amber-500/10 mb-1">
<span class="material-symbols-outlined text-amber-500 text-xl">emoji_events</span>
</div>
<p class="text-xl font-bold leading-none">5</p>
<p class="text-slate-500 dark:text-[#92a4c9] text-[10px] font-medium uppercase tracking-wide">Badges</p>
</div>
<!-- Stat 3 -->
<div class="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700/50 p-3 items-center text-center shadow-sm">
<div class="p-2 rounded-full bg-primary/10 mb-1">
<span class="material-symbols-outlined text-primary text-xl">shield</span>
</div>
<p class="text-xl font-bold leading-none">100%</p>
<p class="text-slate-500 dark:text-[#92a4c9] text-[10px] font-medium uppercase tracking-wide">Score Sécu</p>
</div>
</div>
</div>
<!-- Account Actions List -->
<div class="px-4 mt-8">
<h4 class="text-base font-bold mb-3 px-1">Compte &amp; Sécurité</h4>
<div class="flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-200 dark:border-gray-800">
<!-- Menu Item 1 -->
<button class="group flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1f2937] active:bg-gray-100 transition-colors border-b border-gray-200 dark:border-gray-800/50">
<div class="flex items-center gap-4">
<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
<span class="material-symbols-outlined text-xl">mail</span>
</div>
<span class="font-medium text-sm">Modifier l'email</span>
</div>
<span class="material-symbols-outlined text-slate-400">chevron_right</span>
</button>
<!-- Menu Item 2 -->
<button class="group flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1f2937] active:bg-gray-100 transition-colors border-b border-gray-200 dark:border-gray-800/50">
<div class="flex items-center gap-4">
<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
<span class="material-symbols-outlined text-xl">lock_reset</span>
</div>
<span class="font-medium text-sm">Changer mot de passe</span>
</div>
<span class="material-symbols-outlined text-slate-400">chevron_right</span>
</button>
<!-- Menu Item 3 -->
<button class="group flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1f2937] active:bg-gray-100 transition-colors border-b border-gray-200 dark:border-gray-800/50">
<div class="flex items-center gap-4">
<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
<span class="material-symbols-outlined text-xl">history_edu</span>
</div>
<span class="font-medium text-sm">Historique des niveaux</span>
</div>
<span class="material-symbols-outlined text-slate-400">chevron_right</span>
</button>
<!-- Menu Item 4 -->
<button class="group flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1f2937] active:bg-gray-100 transition-colors">
<div class="flex items-center gap-4">
<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-500/10 text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-xl">notifications</span>
</div>
<span class="font-medium text-sm">Notifications</span>
</div>
<span class="material-symbols-outlined text-slate-400">chevron_right</span>
</button>
</div>
</div>
<!-- Logout Section -->
<div class="px-4 mt-6 mb-8">
<button class="w-full rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-4 text-center text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 active:scale-[0.98] transition-all">
                Se Déconnecter
            </button>
<p class="mt-4 text-center text-xs text-slate-400 dark:text-slate-600">Version 1.2.0 • Build 4521</p>
</div>
</div>
<!-- Bottom Navigation Bar -->
<div class="fixed bottom-0 left-0 w-full bg-background-light/90 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-40 pb-[env(safe-area-inset-bottom)]">
<div class="flex items-center justify-around h-16 max-w-md mx-auto px-2">
<button class="flex flex-1 flex-col items-center justify-center gap-1 h-full text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group">
<span class="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">home</span>
<span class="text-[10px] font-medium">Accueil</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center gap-1 h-full text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group">
<span class="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">sports_esports</span>
<span class="text-[10px] font-medium">Niveaux</span>
</button>
<!-- Active Item -->
<button class="flex flex-1 flex-col items-center justify-center gap-1 h-full text-primary relative">
<span class="material-symbols-outlined text-[26px] fill-current">person</span>
<span class="text-[10px] font-bold">Profil</span>
<span class="absolute top-2 right-6 h-2 w-2 rounded-full bg-red-500 border-2 border-background-light dark:border-background-dark"></span>
</button>
<button class="flex flex-1 flex-col items-center justify-center gap-1 h-full text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group">
<span class="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">school</span>
<span class="text-[10px] font-medium">Apprendre</span>
</button>
</div>
</div>
</div>

</template>


<style scoped>


</style>