import { Link } from 'react-router-dom'
import type { Car } from '../types/car'

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {car.make} {car.model} ({car.year})
        </h3>
        <p className="mt-1 text-xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
        <Link
          to={`/cars/${car.id}`}
          className="mt-3 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          View details
        </Link>
      </div>
    </div>
  )
}
