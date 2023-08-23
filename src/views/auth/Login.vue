<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const loading = ref(false);

async function submitForm() {
  loading.value = true;
  await authStore.login(email, password);
  loading.value = false;
  if (authStore.currentUser) {
    router.push("/");
  }
}
</script>

<template>
  <main>
    <!-- logo -->
    <w-card>
      <w-form @submit.prevent="submitForm">
        <w-field>
          <w-icon name="person"></w-icon>
          <w-input v-model="email" label="Email" type="text" required></w-input>
        </w-field>
        <w-field>
          <w-icon name="lock"></w-icon>
          <w-input
            v-model="password"
            label="Password"
            type="password"
            required
          ></w-input>
        </w-field>

        <w-button type="submit">Login</w-button>
      </w-form>
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
