<script setup>
import { ref } from 'vue'
import { useLibraryStore } from '@/stores/library'
import BookCard from '@/components/library/BookCard.vue'
import SmallModal from '@/components/common/SmallModal.vue'

const library = useLibraryStore()
library.getBooks()
const modal = ref(null)
function addBook() {
  modal?.value.open()
}
</script>

<template>
  <main>
    <div class="search">
      <BookSearch />
    </div>

    <div class="list">
      <template v-if="library.loading"> Loading </template>
      <template v-else>
        <BookCard
          v-for="(book, index) in library.showcase"
          :key="index"
          :book="book"
        />
        <button @click="addBook">Add</button>
      </template>
    </div>
  </main>
  <SmallModal ref="modal">
    <p>hello, im a modal</p>
  </SmallModal>
</template>

<style lang="sass" scoped>
.list
  display: flex
  flex-wrap: wrap
  align-items: flex-start
  justify-content: center
  gap: 3rem
</style>
