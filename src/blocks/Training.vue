<script setup>
import { ref } from "vue"
import Video from "./Video.vue"


const videos = [
    {
        name: "Bobcat E19 - přidržovací palec",
        id: "gZgnQv20En0",
    },
    {
        name: "Bobcat E19 před zahájením činnosti",
        id: "kRHzfO3ltWw",
    },
    {
        name: "Bobcat E19 startování stroje",
        id: "_gTIJDxE1F0",
    },
    {
        name: "Bobcat E19 ovládací prvky 1",
        id: "J8Mij0WtDWg",
    },
    {
        name: "Bobcat E19 ovládací prvky 2",
        id: "nXLFAK0fMJw",
    },
    {
        name: "Bobcat E19 práce se strojem 1",
        id: "Ihjs3Eb3SUo",
    },
    {
        name: "Bobcat E19 práce se strojem 2 joystick",
        id: "liNt3dqgjFI",
    },
    {
        name: "Bobcat E19 práce se strojem praktická ukázka",
        id: "7lW0yts0SeU",
    },
    {
        name: "Bobcat E19 výměna lžíce 1",
        id: "A6ito5AQuT8",
    },
    {
        name: "Bobcat E19 výměna lžíce 2",
        id: "t4aTXVvjgfM",
    },
    {
        name: "Bobcat E19 výměna lžíce 3",
        id: "ao_GpbLPLAg",
    },
    {
        name: "Bobcat E19 podvozek roztahování",
        id: "yC5VUE7drDE",
    },
]

const currentId = ref(videos[0].id)
</script>

<template>
    <section id="instruktaz" class="relative section bg-ink-900 text-white overflow-hidden">
        <div class="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>
        <div class="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>

        <div class="relative container-tight">
            <div class="reveal text-center max-w-2xl mx-auto">
                <span class="accent-bar-light mb-5"></span>
                <h2 class="heading text-white">Instruktáž</h2>
            </div>

            <div class="reveal mt-12 lg:mt-16 grid lg:grid-cols-12 gap-6 lg:gap-10">
                <!-- Video selector list -->
                <div class="lg:col-span-5 order-2 lg:order-1">
                    <div class="rounded-xl bg-ink-800/60 border border-white/10 backdrop-blur-sm overflow-hidden">
                        <ul class="max-h-[28rem] lg:max-h-[34rem] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-brand-500/60 scrollbar-track-ink-800 divide-y divide-white/5">
                            <li v-for="{ name, id } in videos" :key="id">
                                <button
                                    @click="currentId = id"
                                    :class="[
                                        currentId == id
                                            ? 'bg-brand-500/10 text-white'
                                            : 'text-white/70 hover:text-white hover:bg-white/5',
                                        'group w-full text-left px-5 py-4 flex items-center gap-4 transition-colors duration-200'
                                    ]"
                                >
                                    <span
                                        :class="[
                                            currentId == id
                                                ? 'border-brand-500 bg-brand-500'
                                                : 'border-white/25 bg-transparent group-hover:border-brand-500/60',
                                            'flex h-3 w-3 shrink-0 rounded-full border-2 transition-all'
                                        ]"
                                    ></span>
                                    <span class="flex-1 text-sm lg:text-base font-medium leading-snug">{{ name }}</span>
                                    <span
                                        :class="[
                                            currentId == id ? 'opacity-100 text-brand-400 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 text-white/60',
                                            'shrink-0 transition-all'
                                        ]"
                                    >
                                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Video player -->
                <div class="lg:col-span-7 order-1 lg:order-2">
                    <div class="relative rounded-xl overflow-hidden bg-ink-800 border border-white/10 shadow-card-hover">
                        <Video :id="currentId" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
