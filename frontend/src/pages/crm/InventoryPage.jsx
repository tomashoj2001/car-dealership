import { useEffect, useState } from 'react'
import { getCars } from '../../api/cars'

const emptyForm = { make: '', model: '', year: '', price: '', mileage: '' }

export default function InventoryPage() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    getCars().then(({ data }) => {
      setCars(data ?? [])
      setLoading(false)
    })
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Local state only — nothing is persisted back to the mock data source or a backend.
  const handleSubmit = (e) => {
    e.preventDefault()
    const parsedForm = { ...form, year: Number(form.year), price: Number(form.price), mileage: Number(form.mileage) }

    if (editingId) {
      setCars(cars.map((car) => (car.id === editingId ? { ...car, ...parsedForm } : car)))
    } else {
      setCars([...cars, { ...parsedForm, id: Date.now(), imageUrl: 'https://placehold.co/600x400?text=New+Car', description: '' }])
    }

    setForm(emptyForm)
    setEditingId(null)
  }

  const handleEdit = (car) => {
    setEditingId(car.id)
    setForm({ make: car.make, model: car.model, year: car.year, price: car.price, mileage: car.mileage })
  }

  const handleCancel = () => {
    setEditingId(null)
    setForm(emptyForm)
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Inventory</h1>

      <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-2 gap-3 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-5">
        <input name="make" value={form.make} onChange={handleChange} placeholder="Make" required className="rounded-md border border-gray-300 px-2 py-1" />
        <input name="model" value={form.model} onChange={handleChange} placeholder="Model" required className="rounded-md border border-gray-300 px-2 py-1" />
        <input name="year" type="number" value={form.year} onChange={handleChange} placeholder="Year" required className="rounded-md border border-gray-300 px-2 py-1" />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required className="rounded-md border border-gray-300 px-2 py-1" />
        <input name="mileage" type="number" value={form.mileage} onChange={handleChange} placeholder="Mileage" required className="rounded-md border border-gray-300 px-2 py-1" />

        <div className="col-span-2 flex gap-2 sm:col-span-5">
          <button type="submit" className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
            {editingId ? 'Save changes' : 'Add car'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} className="rounded-md border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading cars...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-4 py-2">Make</th>
                <th className="px-4 py-2">Model</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Mileage</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cars.map((car) => (
                <tr key={car.id}>
                  <td className="px-4 py-2">{car.make}</td>
                  <td className="px-4 py-2">{car.model}</td>
                  <td className="px-4 py-2">{car.year}</td>
                  <td className="px-4 py-2">${Number(car.price).toLocaleString()}</td>
                  <td className="px-4 py-2">{Number(car.mileage).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEdit(car)} className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
