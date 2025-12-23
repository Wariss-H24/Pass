<script setup>


</script>


<template>

<div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Main Content Wrapper -->
<div class="flex-1 flex flex-col w-full max-w-md mx-auto relative pb-24">
<!-- Header -->
<header class="flex items-center p-4 justify-between sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-slate-800 dark:text-white">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<div class="flex flex-col items-center">
<span class="text-xs uppercase tracking-widest font-bold text-primary">Niveau 2</span>
<h1 class="text-sm font-semibold text-slate-800 dark:text-white">Complexité</h1>
</div>
<button class="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-text-secondary">
<span class="material-symbols-outlined">help</span>
</button>
</header>
<!-- Progress Indicator -->
<div class="px-6 py-2">
<div class="flex w-full items-center justify-center gap-2">
<div class="h-1.5 flex-1 rounded-full bg-primary"></div>
<div class="h-1.5 flex-1 rounded-full bg-primary"></div>
<div class="h-1.5 flex-1 rounded-full bg-primary"></div>
<div class="h-1.5 flex-1 rounded-full bg-slate-300 dark:bg-surface-dark"></div>
<div class="h-1.5 flex-1 rounded-full bg-slate-300 dark:bg-surface-dark"></div>
</div>
<p class="text-center text-xs text-text-secondary mt-2 font-medium">Étape 3 sur 5</p>
</div>
<!-- Game Content -->
<main class="flex-1 px-5 pt-4 flex flex-col">
<!-- Headline & Instructions -->
<div class="mb-6 text-center">
<div class="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 mb-4 text-primary">
<span class="material-symbols-outlined text-[32px]">security</span>
</div>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Renforcez votre sécurité</h2>
<p class="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                    Votre mot de passe doit maintenant inclure des caractères spéciaux pour devenir impénétrable.
                </p>
</div>
<!-- Input Area -->
<div class="w-full mb-6">
<label class="block text-xs font-bold text-text-secondary uppercase tracking-wide mb-2 ml-1">Votre mot de passe</label>
<div class="relative group">
<input class="w-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white text-lg font-medium border-2 border-slate-200 dark:border-[#324467] rounded-xl px-4 py-4 pr-12 focus:ring-0 focus:border-primary dark:focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="Ex: P@ssw0rd!" type="text" value="MonMotDePasse"/>
<button class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-text-secondary hover:text-primary transition-colors focus:outline-none">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
<!-- Character Count -->
<div class="flex justify-end mt-2">
<span class="text-xs font-medium text-text-secondary">13 caractères</span>
</div>
</div>
<!-- Validation Rules (The Game Logic Visualized) -->
<div class="bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-slate-100 dark:border-transparent">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-lg">checklist</span>
                    Règles à respecter
                </h3>
<div class="space-y-3">
<!-- Rule: Length (Met) -->
<div class="flex items-center gap-3 group">
<div class="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm font-bold">check</span>
</div>
<span class="text-sm font-medium text-slate-700 dark:text-slate-200 line-through decoration-primary decoration-2 opacity-70">Au moins 8 caractères</span>
</div>
<!-- Rule: Uppercase (Met) -->
<div class="flex items-center gap-3 group">
<div class="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm font-bold">check</span>
</div>
<span class="text-sm font-medium text-slate-700 dark:text-slate-200 line-through decoration-primary decoration-2 opacity-70">1 Majuscule minimum</span>
</div>
<!-- Rule: Special Char (Not Met - Active Challenge) -->
<div class="flex items-center gap-3 group animate-pulse">
<div class="size-6 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0 bg-transparent">
<!-- Empty circle for pending -->
</div>
<span class="text-sm font-bold text-slate-900 dark:text-white">1 Caractère spécial (!@#$%)</span>
</div>
<!-- Rule: Number (Met) -->
<div class="flex items-center gap-3 group">
<div class="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm font-bold">check</span>
</div>
<span class="text-sm font-medium text-slate-700 dark:text-slate-200 line-through decoration-primary decoration-2 opacity-70">1 Chiffre</span>
</div>
</div>
</div>
</main>
</div>
<!-- Sticky Bottom Actions -->
<div class="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-white/5 p-4 z-50">
<div class="max-w-md mx-auto flex flex-col gap-3">
<!-- Secondary Action (Contextual) -->
<!-- Only visible if validation is good enough for a real password but not completing the game level yet, or as an optional save -->
<button class="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-lg">save</span>
                Définir comme mot de passe de compte
            </button>
<!-- Primary Action (Next Step) -->
<!-- Disabled state example since one rule is missing -->
<button class="w-full py-4 px-4 rounded-xl bg-slate-200 dark:bg-surface-dark text-slate-400 dark:text-slate-500 font-bold text-base cursor-not-allowed flex items-center justify-center gap-2 shadow-sm" disabled="">
<span>Passer à l'étape suivante</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<!-- Example of enabled state (hidden here for demo logic) -->
<!-- 
            <button class="w-full py-4 px-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <span>Passer à l'étape suivante</span>
                <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </button> 
            -->
</div>
</div>
<!-- Decorative background element -->
<div class="fixed top-20 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-primary/5 blur-3xl -z-10 rounded-full pointer-events-none"></div>
</div>

</template>


<style scoped>


</style>