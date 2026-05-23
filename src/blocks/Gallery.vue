<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import {
    TransitionRoot, TransitionChild,
    Dialog, DialogPanel, DialogTitle,
} from "@headlessui/vue"
import imgAssetTransform from "../util/img-asset-transform.ts"


const images = imgAssetTransform(
    import.meta.glob(
        "/src/assets/gallery/*",
        { as: "url" }
    )
)

const loading = ref(true)
const empty = ref(false)
const dialogOpen = ref(false)
const currentIndex = ref(0)
const dialogImage = computed(() => images[currentIndex.value] || { src: null, alt: null })

const openDialog = (image) => {
    currentIndex.value = images.indexOf(image)
    dialogOpen.value = true
}
const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
}
const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const onKey = (e) => {
    if (!dialogOpen.value) return
    if (e.key === "ArrowRight") next()
    else if (e.key === "ArrowLeft") prev()
}
onMounted(() => {
    if (typeof window !== "undefined") window.addEventListener("keydown", onKey)
})
onBeforeUnmount(() => {
    if (typeof window !== "undefined") window.removeEventListener("keydown", onKey)
})


if (images.length === 0) {
    loading.value = false
    empty.value = true
} else Promise.all(images.map(image => image.src)).then(values => {
    images.forEach((image, index) => {
        image.src = values[index]
    })
    loading.value = false
})  // load all of the assets
</script>

<template>
<section id="galerie" class="relative section bg-ink-900 text-white overflow-hidden">
    <div class="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

    <TransitionRoot as="template" :show="dialogOpen">
        <Dialog as="div" class="relative z-50" @close="dialogOpen = false">
            <TransitionChild as="template" enter="ease-out duration-300"
                enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-ink-950/85 backdrop-blur-sm transition-opacity"></div>
            </TransitionChild>

            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-6">
                    <TransitionChild as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-card-hover transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                            <div class="bg-ink-50 px-5 py-4 border-b border-ink-100 flex items-center justify-between gap-4">
                                <DialogTitle as="h3" class="text-sm font-semibold text-ink-900">
                                    {{ dialogImage.alt || "Image" }}
                                </DialogTitle>
                                <span class="text-xs font-medium text-ink-700 tabular-nums">
                                    {{ currentIndex + 1 }} / {{ images.length }}
                                </span>
                            </div>
                            <div class="relative bg-ink-100">
                                <img :src="dialogImage.src"
                                    :alt="dialogImage.alt || 'Image'"
                                    class="w-full max-h-[70vh] object-contain" />

                                <button
                                    type="button"
                                    @click="prev"
                                    aria-label="Předchozí"
                                    class="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 hover:bg-brand-500 text-ink-900 hover:text-white shadow-card-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    @click="next"
                                    aria-label="Další"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 hover:bg-brand-500 text-ink-900 hover:text-white shadow-card-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                            <div class="bg-white px-5 py-4 border-t border-ink-100 flex justify-end">
                                <button
                                    type="button"
                                    class="btn-ghost-light"
                                    @click="dialogOpen = false"
                                    ref="cancelButtonRef"
                                >Zavřít</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <div class="relative container-tight">
        <div class="reveal flex justify-center">
            <span class="accent-bar-light"></span>
        </div>

        <div v-if="empty" class="reveal mt-16 text-center">
            <p class="text-2xl text-white/70">Galerie je prázdná</p>
        </div>

        <div v-else class="reveal mt-12 lg:mt-16">
            <div v-if="loading" class="flex justify-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><rect width="9" height="9" x="1.5" y="1.5" fill="#06B6D4" rx="1"><animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="1.5" fill="#06B6D4" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="13.5" fill="#06B6D4" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="1.5" y="13.5" fill="#06B6D4" rx="1"><animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect></svg>
            </div>

            <ul v-else class="image-gallery">
                <li v-for="image in images" :key="image.id"
                    class="group relative"
                    @click="openDialog(image)">
                    <img :src="image.src" :alt="image.alt || 'Image'" class="transition-transform duration-500 group-hover:scale-105" />
                    <span class="absolute inset-0 ring-0 group-hover:ring-2 ring-brand-500/70 ring-inset rounded-md transition-all"></span>
                    <span class="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></span>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

ul {
    list-style: none;
}

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-gallery > li {
    flex: 1 1 auto;
    height: 260px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    background: #26241F;
}

.image-gallery::after {
    content: "";
    flex-grow: 999;
}

.image-gallery li img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 6px;
}
</style>
