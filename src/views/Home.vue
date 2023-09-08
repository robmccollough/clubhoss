<script setup>
import { ref } from 'vue'
import { useClubStore } from '@/stores/clubs'
import AddClub from '@/components/clubs/AddClub.vue'
import { useRouter } from 'vue-router'

const addClub = ref(null)
const clubStore = useClubStore()
const router = useRouter()

clubStore.getClubsForCurrentUser()

function showAddClub() {
  addClub.value.show()
}
function selectClub(club) {
  router.push({
    name: 'Club',
    params: { name: club.name },
    meta: { id: club.id }
  })
}
</script>

<template>
  <AddClub ref="addClub" />
  <main>
    <w-card
      v-for="(club, index) in clubStore.clubsForCurrentUser"
      :key="club.id || index"
      shadow
      class="pa5"
      @click="selectClub(club)"
    >
      {{ club.name }}
    </w-card>
    <w-card shadow class="pa5">
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
