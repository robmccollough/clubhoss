<!-- eslint-disable prettier/prettier -->
<script setup>
import { useLibraryStore } from '@/stores/library'

import BookCard from '@/components/library/BookCard.vue'

const library = useLibraryStore()
library.getBooks()
</script>

<template>
  <main>
    <template v-if="library.loading">Loading</template>
    <template v-else>
      <BookCard
        v-for="(book, index) in library.showcase"
        :key="index"
        :book="book"
      />
      <button @click="launchAddBookModal">Add</button>
    </template>
  </main>
</template>

<style lang="sass" scoped>
main
  width: 100%
  height: 100%
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  gap: 3rem
  padding: 3rem
</style>
