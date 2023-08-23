import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loggedIn: false
  }),
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    currentUser: (state) => state.user
  },
  actions: {
    async register(email, password, name) {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      )
      if (user) {
        this.loggedIn = true
        this.user = user
      } else {
        throw new Error('Unable to register user')
      }
    },
    async logIn(email, password) {
      const { user } = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      )
      if (user) {
        this.user = user
        this.loggedIn = true
      } else {
        throw new Error('login failed')
      }
    },
    async logOut() {
      await signOut(getAuth())
    }
  }
})
