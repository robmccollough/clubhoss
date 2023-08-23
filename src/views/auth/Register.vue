<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const isPassword = ref(true);

async function submitForm() {
  loading.value = true;
  await authStore.register(email.value, password.value, username.value);
  loading.value = false;

  if (authStore.currentUser) {
    router.push("/");
  }
}
</script>

<template>
  <main>
    <w-card>
      <h2>
        <b class="light-blue-dark4"> Sign up </b>
      </h2>
      <w-input
        v-model="username"
        class="mt3"
        requried
        label="Username"
        inner-icon-left="mdi mdi-account"
        type="text"
      >
      </w-input>
      <w-input
        v-model="email"
        class="mt3"
        requried
        label="Email"
        inner-icon-left="mde mid-email"
        type="email"
      >
      </w-input>
      <w-input
        v-model="password"
        class="mt3"
        required
        label="Password"
        type="password"
        :inner-icon-left="isPassword ? '' : 'mdi mdi-eye'"
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword"
      >
      </w-input>
      <br />
      <w-button class="my1" :loading="loading" @click.stop="submitForm">
        <b> Sign up </b>
      </w-button>
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
