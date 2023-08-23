<script setup>
import { ref } from 'vue'
import { useClubStore } from '@/stores/clubs'

const clubStore = useClubStore()

const shown = ref(false)
const name = ref('')
const loading = ref(false)

function show() {
  console.log('called')
  shown.value = true
}

async function submit() {
  loading.value = true
  await clubStore.createClub(name.value)
  loading.value = false
  shown.value = false
  clubStore.getClubs()
}

defineExpose({ show })
</script>
<template>
  <w-dialog v-model="shown" width="400" title-class="primary-light1--bg white">
    <template #title> call up the hosses! </template>

    <w-input v-model="name" class="mt3" label="Name" type="text"> </w-input>

    <template #actions>
      <div class="spacer" />
      <w-button :loading="loading" @click="submit()">create club</w-button>
    </template>
  </w-dialog>
</template>

<style lang="sass" scoped></style>
