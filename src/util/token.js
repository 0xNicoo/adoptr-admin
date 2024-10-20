import 'server-only';

import { getToken, logout } from '@/lib/session';
import { jwtDecode } from 'jwt-decode';

export async function getValidToken() {
  const token = await getToken()
  
  if (!token) {
    throw new Error("No tiene sesión.")
  }

  const decodedToken = jwtDecode(token)
  const currentTime = Date.now() / 1000
  
  if (decodedToken.exp < currentTime) {
    logout()
    throw new Error("Sesión expirada.")
  }

  return token
}
