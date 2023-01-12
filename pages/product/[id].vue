<template>
  <div v-if="index.loadingAProduct" class="min-h-[80vh] flex items-center justify-center">
    <Loader />
  </div>
  <div class="w-full sm:w-[90%] sm:mx-auto pb-10" v-else>
    <div class="py-4 w-[90%] mx-auto flex items-center gap-2 text-[14px] capitalize">
      <a href="/" class="opacity-90">Home</a>
      <p>></p>
      <p v-if="index.product" class="opacity-70 whitespace-nowrap">
        {{ index.product.category }}
      </p>
    </div>
    <section class="py-5 bg-white w-full px-3 sm:px-0 lg:w-[70%]">
      <div class="flex flex-col sm:flex-row gap-3 p-5">
        <div>
          <img
            :src="index.product.image"
            alt=""
            class="h-[200px] w-[200px] md:h-[400px] md:w-[400px] mx-auto object-contain"
          />
        </div>
        <div class="w-full flex items-start flex-col gap-2">
          <p>{{ index.product.title }}</p>
          <hr />
          <p class="font-semibold">Product Details:</p>
          <span>{{ index.product.description }}</span>
          <hr />
          <p class="font-semibold text-2xl">
            ₦{{ index.product.price.toLocaleString() }}
          </p>
          <button
            class="flex items-center justify-center gap-4 py-2 bg-primary-color text-white w-full rounded-lg mt-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"
              ></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="16.5" cy="19.5" r="1.5"></circle>
            </svg>
            <p class="text-[17px] sm:text-xl">Add to cart</p>
          </button>
        </div>
      </div>
    </section>
    <section class="bg-white mt-10 w-full lg:w-[70%]">
      <p
        class="text-[17px] sm:text-[20px] font-bold bg-primary-color px-5 py-2 text-white capitalize"
      >
        More from this category
      </p>
      <div
        class="flex items-center overflow-x-scroll sm:overflow-auto sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4"
      >
        <div v-for="product in index.categoryProducts" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useIndexStore } from "~~/stores";
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
