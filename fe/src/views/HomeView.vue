<script setup>
import { useLibraryStore } from '@/stores/library'
import { storeToRefs } from 'pinia'
import ShelfBook from '../components/ShelfBook.vue'
import { onMounted } from 'vue'
const library = useLibraryStore()
library.getBooks()
</script>

<template>
  <main>
    <div v-if="library.loading">Loading</div>
    <div v-else>
      <ShelfBook
        v-for="(book, index) in library.showcase"
        :key="index"
        :book="book"
      />
    </div>

    <button @click="addTest">Add</button>
  </main>
</template>

<style scoped lang="sass">
button
  color: $blue
</style>
