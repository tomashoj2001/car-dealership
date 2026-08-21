import { mockUser } from '../data/mockUser'
import type { ApiResult } from '../types/api'
import type { AuthUser } from '../types/auth'

const FAKE_DELAY_MS = 200

export async function login(
  email: string,
  password: string,
): Promise<ApiResult<{ token: string; user: AuthUser }>> {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))

  if (email === mockUser.email && password === mockUser.password) {
    // Fake a token; a real backend would return a signed JWT here.
    const token = `mock-token-${Date.now()}`
    return { data: { token, user: { email } }, error: null }
  }

  return { data: null, error: 'Invalid email or password' }
}

export async function logout(): Promise<ApiResult<null>> {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))
  return { data: null, error: null }
}
