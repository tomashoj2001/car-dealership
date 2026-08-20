// Static mock leads — there is no leads API yet, this list lives only in this page.
const leads = [
  { id: 1, name: 'Maria Gomez', email: 'maria.gomez@example.com', interestedCar: 'Toyota Corolla', date: '2026-08-12' },
  { id: 2, name: 'John Smith', email: 'john.smith@example.com', interestedCar: 'Ford F-150', date: '2026-08-14' },
  { id: 3, name: 'Aiko Tanaka', email: 'aiko.tanaka@example.com', interestedCar: 'BMW 3 Series', date: '2026-08-16' },
  { id: 4, name: 'Carlos Ruiz', email: 'carlos.ruiz@example.com', interestedCar: 'Honda Civic', date: '2026-08-18' },
]

export default function LeadsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Leads</h1>

      <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Interested Car</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-4 py-2">{lead.name}</td>
                <td className="px-4 py-2">{lead.email}</td>
                <td className="px-4 py-2">{lead.interestedCar}</td>
                <td className="px-4 py-2">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
