<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import excavatorUrl from "../assets/excavator.svg"
import { brand, contact } from "../config/site"


const open = ref(false)
const scrolled = ref(false)
const routes = [
    {
        name: "Domů",
        path: "/#domu",
    },
    {
        name: "Ceník",
        path: "/#cenik"
    },
    {
        name: "Kontakt",
        path: "/#kontakt",
    },
    {
        name: "Galerie",
        path: "/#galerie",
    },
    {
        name: "Instruktáž",
        path: "/#instruktaz",
    },
]

const onScroll = () => { scrolled.value = window.scrollY > 8 }
onMounted(() => {
    if (typeof window === "undefined") return
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
})
onBeforeUnmount(() => {
    if (typeof window !== "undefined") window.removeEventListener("scroll", onScroll)
})
</script>

<template>

<nav
    :class="[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
            ? 'bg-ink-900/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-ink-900/70 backdrop-blur-sm border-b border-white/0'
    ]"
>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 lg:h-20 items-center justify-between gap-4">
            <a href="/#domu" class="group flex items-center gap-3 shrink-0">
                <span class="flex h-10 w-10 items-center justify-center rounded-md bg-brand-500/10 ring-1 ring-brand-500/30 group-hover:bg-brand-500/20 transition-colors">
                    <img :src="excavatorUrl" class="h-6 w-6" alt="Logo" />
                </span>
                <span class="font-display text-base sm:text-lg font-bold tracking-wide text-white whitespace-nowrap">{{ brand.name }}</span>
            </a>

            <ul class="hidden md:flex items-center gap-1">
                <li v-for="route in routes" :key="route.path">
                    <a
                        :href="route.path"
                        class="relative inline-flex items-center px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                    >
                        <span class="relative">
                            {{ route.name }}
                            <span class="absolute -bottom-1 left-0 right-0 h-px bg-brand-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                        </span>
                    </a>
                </li>
            </ul>

            <a
                class="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-500 text-ink-950 font-semibold text-sm hover:bg-brand-400 hover:shadow-brand-glow transition-all"
                :href="contact.phone.href"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span class="whitespace-nowrap">{{ contact.phone.display }}</span>
            </a>

            <button
                @click="open = !open"
                type="button"
                class="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 transition-colors"
                :aria-expanded="open"
            >
                <span class="sr-only">Otevřít menu</span>
                <svg v-if="!open" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
                <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
        </div>

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="open" class="md:hidden pb-4 pt-2">
                <ul class="flex flex-col gap-1">
                    <li v-for="route in routes" :key="route.path">
                        <a
                            @click="open = false"
                            :href="route.path"
                            class="block px-4 py-3 rounded-md text-white/90 bg-white/5 hover:bg-brand-500 hover:text-ink-950 font-medium transition-colors"
                        >{{ route.name }}</a>
                    </li>
                    <li class="pt-2">
                        <a
                            @click="open = false"
                            :href="contact.phone.href"
                            class="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-brand-500 text-ink-950 font-semibold"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {{ contact.phone.display }}
                        </a>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</nav>

</template>
