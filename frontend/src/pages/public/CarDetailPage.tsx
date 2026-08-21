import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCarById } from '../../api/cars'
import type { Car } from '../../types/car'

export default function CarDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [car, setCar] = useState<Car | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCarById(id!).then(({ data, error }) => {
      setCar(data)
      setError(error)
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return <p className="mx-auto max-w-4xl px-4 py-10 text-gray-500">Loading car...</p>
  }

  if (error || !car) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-red-600">{error ?? 'Car not found'}</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to listing
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        Back to listing
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full rounded-lg object-cover" />

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {car.make} {car.model} ({car.year})
          </h1>
          <p className="mt-2 text-2xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
          <p className="mt-1 text-gray-500">{car.mileage.toLocaleString()} miles</p>
          <p className="mt-4 text-gray-700">{car.description}</p>
        </div>
      </div>
    </div>
  )
}
