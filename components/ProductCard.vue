<template>
  <div class="flex flex-col items-center gap-3 pb-4">
    <img
      :src="product.image"
      alt=""
      class="object-contain h-[15vh] w-full md:h-[20vh] sm:w-[90%] mx-auto"
      loading="lazy"
    />
    <p class="text-[15px] text-center px-2 whitespace-nowrap">
      {{ product.title.length > 20 ? product.title.slice(0, 21) + "..." : product.title }}
    </p>
    <p class="text-md md:text-xl font-semibold px-2">
      ₦{{ product.price.toLocaleString() }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>
