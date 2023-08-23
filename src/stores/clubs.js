import { defineStore } from 'pinia'
import ClubDB from '@/firestore/clubs'

import { useAuthStore } from './auth'

export const useClubStore = defineStore('clubs', {
  state: () => ({
    clubs: null
  }),
  getters: {},
  actions: {
    async getClubs() {
      const clubs = await ClubDB.getClubs()
      this.clubs = clubs
    },
    async createClub(name) {
      const auth = useAuthStore()
      await ClubDB.addClub({ name, users: [auth?.currentUser?.uid] })
      this.getClubs()
    }
  }
})
