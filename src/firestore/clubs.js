import { db } from '@/firebase'
import { collection, getDocs, addDoc, where, query } from 'firebase/firestore'

const clubDB = collection(db, 'clubs')

const clubQueryBuilder = (q) => {
  const args = []
  if (q?.name) {
    args.push(where('name', '==', q.name))
  }
  if (q?.users) {
    args.push(where('users', 'array-contains-any', q.users))
  }
  return query(clubDB, ...args)
}

const addClub = async (club) => {
  try {
    const addedClub = addDoc(clubDB, club)
    return addedClub
  } catch (e) {
    console.log(e)
    return []
  }
}
const getClubs = async (query) => {
  try {
    const q = clubQueryBuilder(query)
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => doc.data())
  } catch (e) {
    console.log(e)
    return []
  }
}

export default {
  addClub,
  getClubs
}
