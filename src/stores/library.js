import { defineStore } from 'pinia'
import api from '@/api'

export const useLibraryStore = defineStore('library', {
  state: () => ({
    books: [],
    loading: false,
    search: {
      query: ''
    }
  }),
  getters: {
    showcase: (state) => {
      return state.books.map((book) => ({
        _id: book._id,
        title: book.title,
        link: book.link,
        authors: book.authors,
        narrators: book.narrators,
        description: book.description,
        image: book.image
      }))
    },
    searchQuery(state) {
      return state.search.query
    }
  },
  actions: {
    async addBook(book) {
      const newBook = await api().post('/books', book)
      return newBook
    },
    async updateBook(book) {
      if (!book._id) {
        return
      }
      const newBook = await api().post(`/books/${book._id}`, book)
      return newBook
    },
    async getBooks() {
      this.loading = true
      const books = await api().get('/books')
      this.books = books
      this.loading = false
    }
  }
})
