<script setup>
import { business, contact } from "../config/site"
</script>

<template>

<!--
<svg class="fill-white bg-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path d="M0,160L120,149.3C240,139,480,117,720,128C960,139,1200,181,1320,202.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
-->

<section id="kontakt">

<div class="flex flex-col min-h-screen lg:flex-row-reverse gap-8 lg:gap-16 bg-white text-gray-800">

<div class="my-auto pl-6 pt-20 lg:pt-0 lg:pl-40 lg:w-3/5 text-xl lg:text-2xl">
    <h2 class="pl-5 text-3xl lg:text-4xl font-semibold tracking-wide">Kontakt</h2>

    <p class="p-5">
        {{ business.owner }}<br />
        {{ business.address.street }}<br />
        {{ business.address.city }}<br />
        IČ: {{ business.ic }}
    </p>

    <p class="px-5 flex flex-col gap-2">
        <div class="inline-flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <a class="transition-all hover:scale-110 hover:text-cyan-500" :href="contact.phone.href">
                {{ contact.phone.display }}
            </a>
        </div>
        <div class="inline-flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <a class="transition-all hover:scale-110 hover:text-cyan-500" :href="`mailto:${contact.email}`">
                {{ contact.email }}
            </a>
        </div>
    </p>
</div>

<iframe class="lg:w-2/5 p-5 h-screen md:h-[80vh] my-auto" :src="contact.mapsEmbedUrl" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

<!--
<svg class="fill-white bg-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path d="M0,160L120,149.3C240,139,480,117,720,128C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
-->

</section>

</template>
