export interface AuthUser {
  email: string
}

export interface AuthContextValue {
  isAuthenticated: boolean
  user: AuthUser | null
  login: (email: string, password: string) => Promise<{ error: string | null }>
  logout: () => Promise<void>
}
