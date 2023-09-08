import { defineStore } from 'pinia'
import ClubDB from '@/firestore/clubs'

import { useAuthStore } from './auth'

export const useClubStore = defineStore('clubs', {
  state: () => ({
    clubs: null,
    clubsForCurrentUser: null
  }),
  getters: {},
  actions: {
    async getClubs() {
      const clubs = await ClubDB.getClubs()
      this.clubs = clubs
    },
    async createClub(name) {
      const auth = useAuthStore()
      await ClubDB.addClub({ name, users: [auth?.user?.uid] })
      this.getClubs()
    },
    async getClubsForCurrentUser() {
      const auth = useAuthStore()
      if (auth.user) {
        const clubs = await ClubDB.getClubs({ users: [auth.user.uid] })
        this.clubsForCurrentUser = clubs
      }
    },
    async getClub(id) {
      const [club] = await ClubDB.getClubs({ id })
      console.log(club)
      return club
    }
  }
})
