import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.user
  },
  actions: {
    async register(email, password, name) {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password).catch(() => {
        throw new Error('Unable to register user')
      })
    },
    async login(email, password) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password).catch(() => {
        throw new Error('login failed')
      })
    },
    setUser(user) {
      this.user = user
    },
    async logout() {
      const auth = getAuth()
      await signOut(auth)
    }
  }
})
