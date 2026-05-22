<script setup>
import { ref } from "vue"
import excavatorUrl from "../assets/excavator.svg"
import { brand, contact } from "../config/site"


const open = ref(false)
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
</script>

<template>

<nav class="z-50 bg-gray-900 text-white bg-opacity-100 backdrop-blur-md px-2 sm:px-4 py-2.5 fixed w-full">
    <div class="container py-2 md:py-0 px-6 flex flex-wrap items-center justify-between mx-auto rounded-lg">
        <a href="/#domu" class="flex items-center">
            <img :src="excavatorUrl" class="h-6 mr-3 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap">{{ brand.name }}</span>
        </a>
        <a class="hidden lg:inline-flex gap-3 justify-self-start" :href="contact.phone.href">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span class="transition-all text-xl hover:text-cyan-500 whitespace-nowrap">{{ contact.phone.display }}</span>
        </a>
        <button @click="open = !open" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span class="sr-only">Otevřít menu</span>
            <svg class="w-6 h-6 fill-white" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div :class="[ open ? 'block' : 'hidden', 'w-full md:block md:w-auto' ]">
        <ul class="flex flex-col space-y-2 md:space-y-0 p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-transparent">
            <li v-for="route in routes">
                <a @click="open = false" :href="route.path" class="block py-2 pl-3 pr-4 text-white bg-slate-600 rounded md:bg-transparent md:p-0">{{ route.name }}</a>
            </li>
        </ul>
        </div>
    </div>
</nav>

</template>
