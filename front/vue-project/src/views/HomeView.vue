<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Import Lucide icons
import {
    Menu,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    ShoppingCart,
    Boxes,
    Users,
    Settings,
    Search,
} from "lucide-vue-next";

const router = useRouter();
const isSidebarOpen = ref(true);
const isMobileMenuOpen = ref(false);

const menuItems = [
    { name: 'Tableau de bord', route: '/dashboard', icon: LayoutDashboard },
    { name: 'Historique', route: '/historique', icon: Boxes },
    { name: 'Gamepass', route: '/gamepass', icon: ShoppingCart },
    { name: 'Profil', route: '/profile', icon: Users },
    {name: 'FAQ', route: '/faq', icon: Settings },
];

const goTo = (path) => {
    router.push(path);
    if (window.innerWidth < 768) {
        isMobileMenuOpen.value = false;
    }
};
</script>

<template>
    <div class="flex min-h-screen bg-gradient-to-br from-green-400 via-yellow-100 to-green-500 dark:bg-gray-900 transition-colors">

        <!-- SIDEBAR (Desktop) -->
        <div
            class="hidden md:flex flex-col h-screen border-r shadow-xl bg-gradient-to-b
                   from-green-600/90 to-gray-900/95 text-white dark:from-gray-800 dark:to-black
                   transition-all duration-300"
            :class="isSidebarOpen ? 'w-64' : 'w-20'"
        >
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-white/10">
                <div v-if="isSidebarOpen" class="text-xl font-bold">
                  <span class="material-symbols-outlined !text-[28px]">lock</span>
          <span class="font-bold text-lg tracking-tight text-[#111418] dark:text-white">
            PassMaster
          </span>
        </div>

                <button
                    @click="isSidebarOpen = !isSidebarOpen"
                    class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                    <ChevronLeft v-if="isSidebarOpen" class="w-5 h-5" />
                    <ChevronRight v-else class="w-5 h-5" />
                </button>
            </div>

            <!-- MENU -->
            <nav class="mt-4 space-y-1 px-2">
                <div
                    v-for="item in menuItems"
                    :key="item.route"
                    @click="goTo(item.route)"
                    class="flex items-center cursor-pointer gap-4 p-3 rounded-lg
                           hover:bg-white/15 transition text-white/90 hover:text-white"
                >
                    <component :is="item.icon" class="w-5 h-5" />

                    <span v-if="isSidebarOpen" class="font-medium">
                        {{ item.name }}
                    </span>
                </div>
            </nav>
        </div>

        <!-- MOBILE SIDEBAR -->
        <div
            class="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            v-if="isMobileMenuOpen"
            @click="isMobileMenuOpen = false"
        ></div>

        <div
            class="md:hidden fixed top-0 left-0 h-full bg-gradient-to-b from-green-600 to-gray-900
                   text-white shadow-xl z-50 transition-all duration-300"
            :class="isMobileMenuOpen ? 'w-64' : 'w-0 overflow-hidden'"
        >
            <div class="p-4 border-b border-white/10 flex justify-end">
                <button @click="isMobileMenuOpen = false">
                    <ChevronLeft class="w-6 h-6" />
                </button>
            </div>

            <nav class="mt-4 space-y-1 px-4">
                <div
                    v-for="item in menuItems"
                    :key="item.route"
                    @click="goTo(item.route)"
                    class="flex items-center gap-3 p-3 rounded-lg
                           hover:bg-white/20 cursor-pointer transition"
                >
                    <component :is="item.icon" class="w-5 h-5" />
                    <span>{{ item.name }}</span>
                </div>
            </nav>
        </div>

        <!-- MAIN CONTENT -->
        <div class="flex-1 flex flex-col">

            <!-- TOPBAR -->
            <header
                class="h-16 bg-yellow-50 dark:bg-gray-800 shadow-md px-4 flex items-center justify-between
                       border-b border-gray-200 dark:border-gray-700"
            >
                <!-- MENU ICON MOBILE -->
                <button @click="isMobileMenuOpen = true" class="md:hidden">
                    <Menu class="w-6 h-6 text-gray-800 dark:text-white" />
                </button>

                <div class="flex items-center gap-4">
                    <div class="relative">
                        <Search class="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
                    </div>

                    <div class="w-10 h-10 rounded-full bg-gradient-to-br
                                from-green-500 to-gray-700 dark:from-gray-600 dark:to-black shadow-lg">
                    </div>
                </div>
            </header>

            <!-- MAIN PAGE CONTENT -->
            <main class="p-6 text-gray-800 dark:text-gray-200">
                <router-view />
            </main>
        </div>
    </div>
</template>
