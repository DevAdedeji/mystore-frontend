<template>
  <div class="w-full">
    <p class="text-center text-4xl font-bold py-6 md:py-10">Sign Up</p>
    <form
      class="w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto flex flex-col gap-6"
      @submit.prevent="signup"
    >
      <div class="flex flex-col gap-1">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="form.username"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
          required
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">Email Address</label>
        <input
          type="email"
          v-model="form.email"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
          required
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="w-full border border-primary-color rounded-md p-2 outline-primary-color"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-primary-color text-white p-3 text-center rounded-md"
        :class="loading ? 'opacity-30 cursor-not-allowed' : ''"
        :disabled="loading"
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
import { postData } from "@/services/Post/PostData";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign Up | MyStore",
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});
const toast = useToast();
const router = useRouter();
const form = reactive({
  email: "",
  password: "",
  username: "",
});

const loading = ref<boolean>(false);
const signup = () => {
  loading.value = true;
  postData("/auth/register", form)
    .then((result) => {
      loading.value = false;
      if (result.data.status) {
        toast.success(result.data.message, { timeout: 2000 });
        router.push("/auth/signin");
      } else {
        toast.error(result.data.message, { timeout: 3000 });
      }
    })
    .catch((err) => {
      loading.value = false;
      let error = err.response;

      toast.error(
        error.data.error.username || error.data.error.email || error.data.error
      );
    });
};
</script>
