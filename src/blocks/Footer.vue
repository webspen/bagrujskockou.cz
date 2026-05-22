<script setup>
import { business } from "../config/site"
</script>

<template>

<hr class="border border-gray-200 text-gray-100 bg-gray-800 rounded-full mx-5 mt-12" />

<footer class="my-5 p-4 text-sm lg:p-6">
    <p class="text-gray-600 sm:text-center max-w-sm lg:max-w-max mx-auto">
        Tato webová stránka není schválena, přímo spojena, udržována, autorizována ani sponzorována společností Bobcat CZ, a.s.<br />
        &copy; {{ new Date().getFullYear() }} {{ business.owner }}.
    </p>
</footer>

</template>
