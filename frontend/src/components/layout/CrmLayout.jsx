import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinkClasses = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
  }`

export default function CrmLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/crm/login')
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 bg-gray-800 p-4">
        <p className="mb-6 px-3 text-lg font-bold text-white">CRM</p>
        <nav className="space-y-1">
          <NavLink to="/crm/dashboard" className={navLinkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/crm/inventory" className={navLinkClasses}>
            Inventory
          </NavLink>
          <NavLink to="/crm/leads" className={navLinkClasses}>
            Leads
          </NavLink>
          <button
            onClick={handleLogout}
            className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  )
}
