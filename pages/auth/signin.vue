<template>
  <div class="w-full">
    <p class="text-center text-4xl font-bold py-6 md:py-10">Sign In</p>
    <form
      class="w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto flex flex-col gap-10"
      @submit.prevent="login"
    >
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
        Sign In
      </button>
      <p class="text-center">
        Don't have an account
        <a href="/auth/signup" class="text-primary-color underline">Sign up</a>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { postData } from "@/services/Post/PostData";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign In | MyStore",
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});

const toast = useToast();
const router = useRouter();
const form = reactive({
  email: "",
  password: "",
});
const loading = ref<boolean>(false);
const login = () => {
  loading.value = true;
  postData("/auth/login", form)
    .then((result) => {
      loading.value = false;
      if (result.data.status) {
        localStorage.setItem("USER_AUTH_TOKEN", result.data.token);
        router.push("/");
      } else {
        toast.error(result.data.message, { timeout: 3000 });
      }
    })
    .catch((err) => {
      loading.value = false;
      let error = err.response;
      toast.error(error.data.error);
    });
};
</script>
