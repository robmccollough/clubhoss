<script setup>
import { ref } from 'vue'
import { useClubStore } from '@/stores/clubs'
import AddClub from '@/components/clubs/AddClub.vue'

const addClub = ref(null)
const clubStore = useClubStore()

clubStore.getClubs()

function showAddClub() {
  addClub.value.show()
}
</script>

<template>
  <AddClub ref="addClub" />
  <main>
    <w-card v-for="(club, index) in clubStore.clubs" :key="club.uid || index">
      {{ club.name }}
    </w-card>
    <w-card>
      <w-button @click.stop="showAddClub">
        <FaIcon icon="fa-solid fa-plus" size="xl" />
      </w-button>
    </w-card>
  </main>
</template>

<style scoped lang="sass">
main
  display: grid
  place-items: center
</style>
