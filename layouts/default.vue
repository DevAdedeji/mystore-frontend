<template>
  <div class="bg-grey min-h-screen">
    <the-navbar />
    <slot />
    <the-footer />
  </div>
</template>

<script setup>
const lang = "en-US";

useHead({
  title: "MyStore | E-commerce platform",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  htmlAttrs: { lang },
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});
</script>
