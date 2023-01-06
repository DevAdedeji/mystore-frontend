<template>
  <div class="flex flex-col items-center gap-3">
    <img :src="product.image" alt="" class="object-contain h-[20vh]" loading="lazy" />
    <p class="text-[15px] px-2">
      {{ product.title.length > 20 ? product.title.slice(0, 21) + "..." : product.title }}
    </p>
    <p class="text-xl font-semibold px-2">₦{{ product.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>
