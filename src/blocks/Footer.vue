<script setup>
import { business } from "../config/site"
</script>

<template>

<footer class="bg-ink-950 text-white/60 border-t border-white/5">
    <div class="container-tight px-5 sm:px-8 py-10">
        <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        <p class="text-xs sm:text-sm text-center leading-relaxed max-w-3xl mx-auto">
            Tato webová stránka není schválena, přímo spojena, udržována, autorizována ani sponzorována společností Bobcat CZ, a.s.<br />
            &copy; {{ new Date().getFullYear() }} {{ business.owner }}.
        </p>
    </div>
</footer>

</template>
