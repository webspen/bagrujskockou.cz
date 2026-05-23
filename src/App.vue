<script setup>
import Nav from "./blocks/Nav.vue"
import Landing from "./blocks/Landing.vue"
import Pricing from "./blocks/Pricing.vue"
import Contact from "./blocks/Contact.vue"
import Gallery from "./blocks/Gallery.vue"
import Training from "./blocks/Training.vue"
import Footer from "./blocks/Footer.vue"
import { useReveal } from "./util/use-reveal.js"

useReveal()
</script>

<template>

<Nav />
<main class="z-10">
    <Landing />
    <Pricing />
    <Training />
    <Contact />
    <Gallery />
</main>
<Footer />

</template>
