import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { useAuthStore } from './stores/auth'
import Router from '@/router'
import {
  getAuth,
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCA6PMjhC4qGp6TcG31WXg7g3ecKk6pOP8',
  authDomain: 'clubhoss.firebaseapp.com',
  projectId: 'clubhoss',
  storageBucket: 'clubhoss.appspot.com',
  messagingSenderId: '644659646557',
  appId: '1:644659646557:web:3358a95f45f53a7ce23db4',
  measurementId: 'G-7B4SVYQ75Z'
}

// Initialize Firebase App and auth service

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const initFirebaseAuth = async () => {
  const { setUser } = useAuthStore()
  const auth = getAuth()
  await setPersistence(auth, browserSessionPersistence)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      Router.push({ name: 'Home' })
    }
  })
}

export { app, db, initFirebaseAuth }
