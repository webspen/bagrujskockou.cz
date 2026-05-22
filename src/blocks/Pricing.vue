<script setup>
import { pricing } from "../config/site"
</script>

<template>

<section id="cenik" class="min-h-screen p-5 flex">

<div class="overflow-hidden bg-gray-800 text-white shadow sm:rounded-lg my-auto mx-auto">

<div class="px-4 py-5 sm:px-6">
    <h3 class="text-2xl md:text-3xl font-semibold tracking-wide leading-6">Ceník</h3>
    <p class="mt-1 text-slate-200">{{ pricing.notice }}</p>
</div>
<div class="border-t border-gray-600">
    <dl>
        <div
            v-for="(item, i) in pricing.items"
            :key="item.label"
            :class="[
                i === 0 ? 'bg-gray-700' : 'bg-gray-900',
                'px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6',
            ]"
        >
            <dt class="font-medium text-slate-200">{{ item.label }}</dt>
            <dd class="mt-1 text-white sm:col-span-2 sm:mt-0">
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
