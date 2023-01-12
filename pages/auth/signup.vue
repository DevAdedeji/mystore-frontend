<template>
  <div class="w-full">
    <p class="text-center text-4xl font-bold py-10">Sign Up</p>
    <form class="w-[90%] sm:w-[70&] lg:w-[30%] mx-auto flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
        />
      </div>
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
        Sign Up
      </button>
      <p class="text-center">
        Already have an account?
        <a href="/auth/signin" class="text-primary-color underline">Sign In</a>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign Up | MyStore",
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});
const email = ref("");
const password = ref("");
const username = ref("");
</script>
