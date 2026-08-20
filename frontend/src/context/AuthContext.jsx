import { createContext, useContext, useState } from 'react'
import { login as loginRequest, logout as logoutRequest } from '../api/auth'

const AUTH_STORAGE_KEY = 'crm_token'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(AUTH_STORAGE_KEY))
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const { data, error } = await loginRequest(email, password)

    if (error) {
      return { error }
    }

    localStorage.setItem(AUTH_STORAGE_KEY, data.token)
    setToken(data.token)
    setUser(data.user)
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
