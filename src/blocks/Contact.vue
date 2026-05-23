<script setup>
import { business, contact } from "../config/site"
</script>

<template>

<section id="kontakt" class="relative section bg-ink-50 overflow-hidden">
    <div class="absolute inset-0 bg-grid-warm opacity-50 pointer-events-none"></div>
    <div class="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl pointer-events-none"></div>

    <div class="relative container-tight">
        <div class="reveal text-center max-w-2xl mx-auto">
            <span class="accent-bar mb-5"></span>
            <h2 class="heading text-ink-900">Kontakt</h2>
        </div>

        <div class="reveal mt-12 lg:mt-16 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            <!-- Info card -->
            <div class="lg:col-span-2 relative overflow-hidden rounded-xl bg-ink-900 text-white p-8 lg:p-10 shadow-card">
                <div class="absolute top-0 left-0 h-1 w-24 bg-brand-500"></div>
                <div class="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-brand-500/15 blur-2xl pointer-events-none"></div>

                <div class="relative">
                    <p class="text-base lg:text-lg leading-relaxed text-white/85">
                        {{ business.owner }}<br />
                        {{ business.address.street }}<br />
                        {{ business.address.city }}<br />
                        IČ: {{ business.ic }}
                    </p>

                    <div class="mt-8 space-y-4">
                        <a
                            class="group flex items-center gap-4 -mx-2 px-2 py-2 rounded-md hover:bg-white/5 transition-colors"
                            :href="contact.phone.href"
                        >
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>
                            <span class="text-lg lg:text-xl font-semibold text-white group-hover:text-brand-400 transition-colors">
                                {{ contact.phone.display }}
                            </span>
                        </a>

                        <a
                            class="group flex items-center gap-4 -mx-2 px-2 py-2 rounded-md hover:bg-white/5 transition-colors"
                            :href="`mailto:${contact.email}`"
                        >
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <span class="text-base lg:text-lg font-semibold text-white group-hover:text-brand-400 transition-colors break-all">
                                {{ contact.email }}
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Map -->
            <div class="lg:col-span-3 relative rounded-xl overflow-hidden border border-ink-100 shadow-card bg-white min-h-[20rem] lg:min-h-[28rem]">
                <iframe
                    class="absolute inset-0 w-full h-full"
                    :src="contact.mapsEmbedUrl"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
</section>

</template>
