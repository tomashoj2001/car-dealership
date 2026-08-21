import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import CrmLayout from './components/layout/CrmLayout'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/public/LandingPage'
import CarDetailPage from './pages/public/CarDetailPage'
import LoginPage from './pages/crm/LoginPage'
import DashboardPage from './pages/crm/DashboardPage'
import InventoryPage from './pages/crm/InventoryPage'
import LeadsPage from './pages/crm/LeadsPage'

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars/:id" element={<CarDetailPage />} />
      </Route>

      {/* CRM login stays outside ProtectedRoute */}
      <Route path="/crm/login" element={<LoginPage />} />

      {/* CRM app, requires authentication */}
      <Route element={<ProtectedRoute />}>
        <Route path="/crm" element={<CrmLayout />}>
          <Route index element={<Navigate to="/crm/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="leads" element={<LeadsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
