<template>
  <div class="bg-white w-full">
    <nav class="h-[70px] md:h-[10vh] px-5 flex items-center !justify-between">
      <div class="w-[50%] md:w-[15%]">
        <a href="/">
          <img src="../assets/images/logo.png" class="w-full" alt="" />
        </a>
      </div>
      <form @submit.prevent="searchProduct" class="hidden md:flex items-center gap-2">
        <input
          type="text"
          v-model="searchTerm"
          class="border border-grey rounded-md p-2 w-[400px]"
          placeholder="Search Product"
        />
        <button class="bg-primary-color text-white rounded-md py-2 px-5">Search</button>
      </form>
      <a href="/cart">
        <div
          class="border-2 rounded-lg border-primary-color py-2 px-4 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(244, 67, 54, 1); transform: ; msfilter: "
          >
            <path
              d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"
            ></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="16.5" cy="19.5" r="1.5"></circle>
          </svg>
          <p>0</p>
        </div>
      </a>
    </nav>
    <form
      @submit.prevent="searchProduct"
      class="w-full md:hidden gap-2 pb-4 flex justify-center"
    >
      <input
        type="text"
        v-model="searchTerm"
        class="border border-[#000000] rounded-lg outline-none p-2 w-[90%]"
        placeholder="Search Product"
      />
    </form>
  </div>
</template>

<script setup>
const searchTerm = ref();
const searchProduct = () => {};
</script>

<style lang="postcss" scoped></style>
