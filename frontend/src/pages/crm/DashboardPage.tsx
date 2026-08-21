import { useEffect, useState } from 'react'
import { getCars } from '../../api/cars'

// Mock stat — not backed by any API since leads aren't a real resource yet.
const NEW_LEADS_COUNT = 4

export default function DashboardPage() {
  const [carCount, setCarCount] = useState(0)

  useEffect(() => {
    getCars().then(({ data }) => setCarCount(data?.length ?? 0))
  }, [])

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total Cars in Inventory</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{carCount}</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">New Leads</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{NEW_LEADS_COUNT}</p>
        </div>
      </div>
    </div>
  )
}
