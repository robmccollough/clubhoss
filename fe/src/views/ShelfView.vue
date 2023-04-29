<!-- eslint-disable prettier/prettier -->
<script setup>
import { useLibraryStore } from '@/stores/library'

import BookCard from '@/components/library/BookCard.vue'

const library = useLibraryStore()
library.getBooks()
</script>

<template>
  <main>
    <div v-if="library.loading">Loading</div>
    <div v-else>
      <BookCard
        v-for="(book, index) in library.showcase"
        :key="index"
        :book="book"
      />
      <button @click="launchAddBookModal">Add</button>
    </div>
  </main>
</template>
