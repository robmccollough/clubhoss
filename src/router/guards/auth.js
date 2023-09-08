import { useAuthStore } from '@/stores/auth'

export const authGaurd = (to, from) => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn) {
    return '/login'
  }
}
