<template>
  <div v-if="index.loading" class="min-h-[80vh] flex items-center justify-center">
    <Loader />
  </div>
  <div class="pb-10 flex flex-col gap-1 sm:gap-10" v-else>
    <section class="w-full sm:w-[90%] mx-auto bg-white overflow-hidden sm:mt-5">
      <p
        class="text-[17px] sm:text-[20px] font-bold bg-primary-color px-5 py-2 text-white"
      >
        Top Selling Items
      </p>
      <div
        class="flex items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4 sm:overflow-auto overflow-x-scroll"
      >
        <div v-for="product in index.products.slice(0, 5)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-full sm:w-[90%] mx-auto bg-white overflow-hidden">
      <div class="bg-primary-color px-5 py-2 flex items-center justify-between">
        <p class="text-[17px] sm:text-[20px] font-bold text-white">Women's Clothing</p>
        <div
          class="flex items-center gap-1 text-white uppercase cursor-pointer hover:underline"
        >
          <p>See all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex items-center sm:overflow-auto overflow-x-scroll sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4"
      >
        <div v-for="product in index.womens.slice(0, 10)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-full sm:w-[90%] mx-auto bg-white overflow-hidden">
      <div class="bg-primary-color px-5 py-2 flex items-center justify-between">
        <p class="text-[17px] sm:text-[20px] font-bold text-white">Men's Clothing</p>
        <div
          class="flex items-center gap-1 text-white uppercase cursor-pointer hover:underline"
        >
          <p>See all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex items-center sm:overflow-auto overflow-x-scroll sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4"
      >
        <div v-for="product in index.mens.slice(0, 10)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-full sm:w-[90%] mx-auto bg-white overflow-hidden">
      <div class="bg-primary-color px-5 py-2 flex items-center justify-between">
        <p class="text-[17px] sm:text-[20px] font-bold text-white">Jewelery</p>
        <div
          class="flex items-center gap-1 text-white uppercase cursor-pointer hover:underline"
        >
          <p>See all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex items-center sm:overflow-auto overflow-x-scroll sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4 justify-center"
      >
        <div v-for="product in index.jewelery.slice(0, 10)" :key="product._id">
          <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-full sm:w-[90%] mx-auto bg-white overflow-hidden">
      <div class="bg-primary-color px-5 py-2 flex items-center justify-between">
        <p class="text-[17px] sm:text-[20px] font-bold text-white">Electronics</p>
        <div
          class="flex items-center gap-1 text-white uppercase cursor-pointer hover:underline"
        >
          <p>See all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex items-center sm:overflow-auto overflow-x-scroll sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 pt-4"
      >
        <div v-for="product in index.electronics.slice(0, 10)" :key="product._id">
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
</script>
