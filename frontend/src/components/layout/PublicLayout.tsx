import { Link, Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            AutoDealership
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </nav>
      </header>

      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AutoDealership. All rights reserved.
      </footer>
    </div>
  )
}
