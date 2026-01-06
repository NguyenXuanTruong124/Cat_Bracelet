import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/UI_Login';
import RoleSelection from './pages/RoleSelection';

import Customer from './pages/Customer';
import Admin from './pages/Admin';

import StaffDashboard from './pages/Staff/StaffDashboard.jsx';
import StaffProducts from './pages/Staff/StaffProducts.jsx';
import StaffOrders from './pages/Staff/StaffOrders.jsx';
import StaffCustomers from './pages/Staff/StaffCustomers.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/role" element={<RoleSelection />} />

      <Route path="/staff" element={<Navigate to="/staff/dashboard" replace />} />
      <Route path="/staff/dashboard" element={<StaffDashboard />} />
      <Route path="/staff/products" element={<StaffProducts />} />
      <Route path="/staff/orders" element={<StaffOrders />} />
      <Route path="/staff/customers" element={<StaffCustomers />} />

      <Route path="/customer" element={<Customer />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
