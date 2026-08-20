import { mockUser } from '../data/mockUser'

const FAKE_DELAY_MS = 200

export async function login(email, password) {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))

  if (email === mockUser.email && password === mockUser.password) {
    // Fake a token; a real backend would return a signed JWT here.
    const token = `mock-token-${Date.now()}`
    return { data: { token, user: { email } }, error: null }
  }

  return { data: null, error: 'Invalid email or password' }
}

export async function logout() {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))
  return { data: null, error: null }
}
