<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

async function register() {
  loading.value = true
  await authStore.register(email.value, password.value, username.value)
  loading.value = false

  if (authStore.currentUser) {
    router.push('/')
  }
}
</script>

<template>
  <main>
    <w-card>
      <h2>
        <b class="light-blue-dark4"> get down to business </b>
      </h2>
      <w-input v-model="username" class="mt3" label="username" type="text">
      </w-input>
      <w-input v-model="email" class="mt3" requried label="email" type="email">
      </w-input>
      <w-input v-model="password" class="mt3" label="password" type="password">
      </w-input>
      <br />
      <w-button class="my1" :loading="loading" @click.stop="register">
        <b> sign up </b>
      </w-button>
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
