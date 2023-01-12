<template>
  <div class="bg-white w-full">
    <nav class="h-[70px] md:h-[10vh] px-5 flex items-center !justify-between">
      <div>
        <a href="/" class="flex items-center gap-1">
          <p
            class="text-primary-color text-xl"
            style="font-family: 'Abril Fatface', cursive"
          >
            MyStore
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(27, 146, 244, 1); transform: ; msfilter: "
          >
            <path
              d="M4 20h2V10a1 1 0 0 1 1-1h12V7a1 1 0 0 0-1-1h-3.051c-.252-2.244-2.139-4-4.449-4S6.303 3.756 6.051 6H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm6.5-16c1.207 0 2.218.86 2.45 2h-4.9c.232-1.14 1.243-2 2.45-2z"
            ></path>
            <path
              d="M21 11H9a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1zm-6 7c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5z"
            ></path>
          </svg>
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
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1 font-medium text-primary-color">
          <a href="/auth/signin">Sign in</a>
          <p class="text-2xl">|</p>
          <a href="/auth/signup">Sign Up</a>
        </div>
        <a href="/cart">
          <div
            class="border-2 rounded-lg border-primary-color py-2 px-4 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(27, 146, 244, 1); transform: ; msfilter: "
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
      </div>
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
