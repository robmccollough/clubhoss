<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useClubStore } from '@/stores/clubs'

const clubStore = useClubStore()
const route = useRoute()
const club = ref(null)
async function fetchClub() {
  const fetchedClub = await clubStore.getClub(route.meta.id)
  club.value = fetchedClub || null
}
fetchClub()
</script>

<template>
  <main>
    <h2>Users</h2>
    <w-card
      v-for="(user, index) in club?.users || []"
      :key="user || index"
      shadow
      class="pa5"
    >
      {{ user }}
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
