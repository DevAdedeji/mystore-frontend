<template>
  <div v-if="index.loading" class="min-h-[80vh] flex items-center justify-center">
    <Loader />
  </div>
  <div class="pb-10 flex flex-col gap-10" v-else>
    <section class="w-[90%] mx-auto bg-white mt-10">
      <p class="text-[20px] font-bold bg-primary-color px-5 py-2 text-white">
        Top Selling Items
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4">
        <div v-for="product in index.products.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-[90%] mx-auto bg-white">
      <p class="text-[20px] font-bold bg-primary-color px-5 py-2 text-white">
        Women's Clothing
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4">
        <div v-for="product in index.womens.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-[90%] mx-auto bg-white">
      <p class="text-[20px] font-bold bg-primary-color px-5 py-2 text-white">
        Men's Clothing
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4">
        <div v-for="product in index.mens.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-[90%] mx-auto bg-white">
      <p class="text-[20px] font-bold bg-primary-color px-5 py-2 text-white">Jewelery</p>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4 items-center justify-center"
      >
        <div v-for="product in index.jewelery.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-[90%] mx-auto bg-white">
      <p class="text-[20px] font-bold bg-primary-color px-5 py-2 text-white">
        Electronics
      </p>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4 place-content-center"
      >
        <div v-for="product in index.electronics.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useIndexStore } from "~~/stores/products";
import { useToast } from "vue-toastification";
const toast = useToast();
const index = useIndexStore();
index.getProducts();
toast.success("Welcome to myStore", { timeout: 3000 });
</script>
