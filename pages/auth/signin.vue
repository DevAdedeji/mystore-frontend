<template>
  <div class="w-full">
    <p class="text-center text-4xl font-bold py-10">Sign In</p>
    <form class="w-[90%] sm:w-[70&] lg:w-[30%] mx-auto flex flex-col gap-10">
      <div class="flex flex-col gap-1">
        <label for="email">Email Address</label>
        <input
          type="email"
          v-model="email"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">Password</label>
        <input
          type="password"
          v-model="password"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
        />
      </div>
      <button
        type="submit"
        class="bg-primary-color text-white p-3 text-center rounded-md"
      >
        Sign In
      </button>
      <p class="text-center">
        Don't have an account
        <a href="/auth/signup" class="text-primary-color underline">Sign up</a>
      </p>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign In | MyStore",
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});
const email = ref("");
const password = ref("");
</script>
