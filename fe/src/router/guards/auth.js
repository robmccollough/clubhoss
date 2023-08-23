import { useAuthStore } from '@/stores/auth'

export const authGaurd = (to) => {
  const needsAuth = to.matched.some((record) => record.meta.requiresAuth)
  const { isLoggedIn } = useAuthStore()
  if (!isLoggedIn && needsAuth) {
    return '/login'
  } else if (isLoggedIn && to.name === 'Login') {
    return '/home'
  }
}
