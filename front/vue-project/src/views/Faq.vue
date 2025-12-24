<script setup>


</script>


<template>


<div class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col transition-colors duration-300">
<!-- Sticky Header -->
<header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
<div class="flex items-center justify-between p-4 h-16">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<h1 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center">FAQ des Cours</h1>
<div class="size-10"></div> <!-- Spacer for centering -->
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex flex-col w-full max-w-md mx-auto px-4 pt-4 pb-8 space-y-6">
<!-- Introduction Text -->
<div class="text-center px-2">
<p class="text-gray-600 dark:text-gray-400 text-sm">
                Trouvez des réponses sur la sécurité, les règles du jeu et le fonctionnement de l'application.
            </p>
</div>
<!-- Search Bar -->
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-400 dark:text-gray-500">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm text-base transition-all" placeholder="Rechercher une question..." type="text"/>
</div>
<!-- Category Chips -->
<div class="flex gap-2 overflow-x-auto hide-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
<button class="flex items-center justify-center h-9 px-4 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap shadow-md shadow-primary/20">
                Tout
            </button>
<button class="flex items-center justify-center h-9 px-4 rounded-full bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Sécurité
            </button>
<button class="flex items-center justify-center h-9 px-4 rounded-full bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Règles du jeu
            </button>
<button class="flex items-center justify-center h-9 px-4 rounded-full bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Technique
            </button>
</div>
<!-- Accordion List -->
<div class="flex flex-col gap-3">
<!-- Item 1: Open State Example -->
<details class="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm" open="">
<summary class="flex cursor-pointer items-center justify-between p-4 list-none select-none active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
<span class="font-medium text-primary text-sm sm:text-base">Qu'est-ce que l'entropie ?</span>
<span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div class="px-4 pb-4 pt-0">
<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        L'entropie mesure le caractère aléatoire et l'imprévisibilité d'un mot de passe. Plus l'entropie est élevée, plus le mot de passe est difficile à craquer par des attaques par force brute. Dans ce jeu, viser une entropie élevée vous rapporte plus de points.
                    </p>
</div>
</details>
<!-- Item 2 -->
<details class="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
<summary class="flex cursor-pointer items-center justify-between p-4 list-none select-none active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
<span class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Pourquoi utiliser des caractères spéciaux ?</span>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-transform duration-300 group-open:rotate-180 group-open:text-primary">expand_more</span>
</summary>
<div class="px-4 pb-4 pt-0">
<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Les caractères spéciaux (!@#$%) augmentent considérablement l'espace de recherche pour un pirate informatique. Ils ajoutent de la complexité structurelle, rendant les attaques par dictionnaire beaucoup moins efficaces.
                    </p>
</div>
</details>
<!-- Item 3 -->
<details class="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
<summary class="flex cursor-pointer items-center justify-between p-4 list-none select-none active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
<span class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Comment gagner plus de points ?</span>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-transform duration-300 group-open:rotate-180 group-open:text-primary">expand_more</span>
</summary>
<div class="px-4 pb-4 pt-0">
<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Vous gagnez des points en créant des mots de passe robustes qui respectent les contraintes du niveau rapidement. Évitez d'utiliser les indices si vous le pouvez, car ils réduisent votre score final de niveau.
                    </p>
</div>
</details>
<!-- Item 4 -->
<details class="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
<summary class="flex cursor-pointer items-center justify-between p-4 list-none select-none active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
<span class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Mes mots de passe sont-ils enregistrés ?</span>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-transform duration-300 group-open:rotate-180 group-open:text-primary">expand_more</span>
</summary>
<div class="px-4 pb-4 pt-0">
<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Absolument pas. Cette application est un outil éducatif. Tous les mots de passe que vous saisissez sont traités localement sur votre appareil pour calculer leur score et sont immédiatement effacés de la mémoire une fois le niveau terminé.
                    </p>
</div>
</details>
<!-- Item 5 -->
<details class="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
<summary class="flex cursor-pointer items-center justify-between p-4 list-none select-none active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
<span class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Que faire si je suis bloqué ?</span>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-transform duration-300 group-open:rotate-180 group-open:text-primary">expand_more</span>
</summary>
<div class="px-4 pb-4 pt-0">
<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Si vous êtes bloqué à un niveau, utilisez le bouton "Indice" (l'icône d'ampoule). Le premier indice est souvent gratuit ou coûte très peu de points. Vous pouvez aussi consulter la section "Théorie" du cours pour rafraîchir vos connaissances.
                    </p>
</div>
</details>
</div>
<!-- Contact Support Button -->
<div class="pt-6 pb-8 text-center">
<p class="text-gray-500 text-xs mb-3">Vous ne trouvez pas votre réponse ?</p>
<button class="w-full bg-primary/10 hover:bg-primary/20 text-primary active:bg-primary/25 font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">support_agent</span>
                Contacter le support
            </button>
</div>
</main>
</div>

</template>


<style scoped>


</style>