import { useEffect, useState } from 'react'
import { getCars } from '../../api/cars'
import CarCard from '../../components/CarCard'

export default function LandingPage() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCars().then(({ data }) => {
      setCars(data ?? [])
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <section className="bg-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Find Your Next Car</h1>
        <p className="mt-2 text-lg text-blue-100">
          Quality pre-owned and new vehicles at unbeatable prices.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Our Inventory</h2>

        {loading ? (
          <p className="text-gray-500">Loading cars...</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
