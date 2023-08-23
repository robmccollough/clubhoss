<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loading = ref(false)

async function login() {
  loading.value = true
  await authStore.login(email.value, password.value)
  loading.value = false
  if (authStore.currentUser) {
    router.push('/')
  }
}
</script>

<template>
  <main>
    <!-- logo -->
    <w-card>
      <w-input v-model="email" class="mt3" label="email" type="text"></w-input>
      <w-input
        v-model="password"
        class="mt3"
        label="password"
        type="password"
      ></w-input>

      <w-button class="my1" :loading="loading" @click.stop="login">
        <b> sign in </b>
      </w-button>
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
