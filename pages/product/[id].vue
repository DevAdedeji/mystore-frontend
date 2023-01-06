<template>
  <div class="w-[90%] mx-auto">
    <div class="py-4 flex items-center gap-2 text-[14px] capitalize">
      <a href="/">Home</a>
      <p>></p>
      <p v-if="index.product">{{ index.product.categories[0] }}</p>
    </div>
  </div>
</template>

<script setup>
import { useIndexStore } from "~~/store/useIndexStore";
const index = useIndexStore();
const route = useRoute();
const slug = route.params.id;
index.getAProduct(slug);
watch(
  () => index.product,
  (product, prevProduct) => {
    useHead({
      title: `${product.title}`,
    });
  }
);
</script>
