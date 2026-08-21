import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { login as loginRequest, logout as logoutRequest } from '../api/auth'
import type { AuthContextValue, AuthUser } from '../types/auth'

const AUTH_STORAGE_KEY = 'crm_token'

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(() => localStorage.getItem(AUTH_STORAGE_KEY))
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = async (email: string, password: string) => {
    const { data, error } = await loginRequest(email, password)

    if (error) {
      return { error }
    }

    // error is null here, so the API contract guarantees data is present.
    localStorage.setItem(AUTH_STORAGE_KEY, data!.token)
    setToken(data!.token)
    setUser(data!.user)
    return { error: null }
  }

  const logout = async () => {
    await logoutRequest()
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setToken(null)
    setUser(null)
  }

  const value = {
    isAuthenticated: Boolean(token),
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
