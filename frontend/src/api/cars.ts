import { mockCars } from '../data/mockCars'
import type { Car } from '../types/car'
import type { ApiResult } from '../types/api'

// Simulates network latency so pages behave the same once this is swapped for real fetch calls.
const FAKE_DELAY_MS = 200

export async function getCars(): Promise<ApiResult<Car[]>> {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))
  return { data: mockCars, error: null }
}

export async function getCarById(id: string): Promise<ApiResult<Car>> {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))
  const car = mockCars.find((c) => String(c.id) === String(id))

  if (!car) {
    return { data: null, error: 'Car not found' }
  }

  return { data: car, error: null }
}
