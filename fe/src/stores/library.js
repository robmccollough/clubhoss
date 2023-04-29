import { defineStore } from 'pinia'
import api from '@/api'

export const useLibraryStore = defineStore('library', {
  state: () => ({
    books: [],
    loading: false
  }),
  getters: {
    showcase: (state) => {
      return state.books.map((book) => ({
        title: book.title,
        link: book.link,
        authors: book.authors,
        narrators: book.narrators,
        image: book.image
      }))
    }
  },
  actions: {
    async addBook(book) {
      await api().post('/books', book)
      this.getBooks()
    },
    async getBooks() {
      this.loading = true
      const books = await api().get('/books')
      this.books = books
      this.loading = false
    }
  }
})
