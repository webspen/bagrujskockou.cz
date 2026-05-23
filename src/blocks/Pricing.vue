<script setup>
import { pricing } from "../config/site"
</script>

<template>

<section id="cenik" class="relative section bg-ink-50">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"></div>

    <div class="container-tight">
        <div class="reveal max-w-2xl mx-auto text-center">
            <span class="accent-bar mb-5"></span>
            <h2 class="heading text-ink-900">Ceník</h2>
            <p class="mt-5 text-base lg:text-lg text-ink-700 leading-relaxed">{{ pricing.notice }}</p>
        </div>

        <div class="reveal mt-12 lg:mt-14 mx-auto max-w-5xl">
            <dl class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                <div
                    v-for="(item, i) in pricing.items"
                    :key="item.label"
                    :class="[
                        i === 0
                            ? 'bg-ink-900 text-white md:col-span-1'
                            : 'bg-white text-ink-900 border border-ink-100',
                        i === 2 ? 'md:col-span-2' : '',
                        'group relative overflow-hidden rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300',
                    ]"
                >
                    <span
                        :class="[
                            i === 0 ? 'bg-brand-500' : 'bg-brand-500/70',
                            'absolute top-0 left-0 h-1 w-12 group-hover:w-full transition-all duration-500'
                        ]"
                    ></span>
                    <dt
                        :class="[
                            i === 0 ? 'text-white/70' : 'text-ink-700',
                            'text-xs font-semibold uppercase tracking-[0.16em]'
                        ]"
                    >{{ item.label }}</dt>
                    <dd
                        :class="[
                            i === 0 ? 'text-white' : 'text-ink-900',
                            'mt-4 font-display text-xl lg:text-2xl font-semibold leading-snug'
                        ]"
                    >
                        <template v-for="(line, j) in item.lines" :key="j">
                            <br v-if="j > 0" />{{ line }}
                        </template>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</section>

</template>
