import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/UI_Login';
import RoleSelection from './pages/RoleSelection';

import Customer from './pages/Customer';
import Admin from './pages/Admin';
import About from './pages/About';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

import StaffDashboard from './pages/Staff/StaffDashboard.jsx';
import StaffProducts from './pages/Staff/StaffProducts.jsx';
import StaffOrders from './pages/Staff/StaffOrders.jsx';
import StaffCustomers from './pages/Staff/StaffCustomers.jsx';

function App() {
  return (
<<<<<<< HEAD
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
=======
    <CartProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <CartDrawer />
    </CartProvider>
>>>>>>> UI_Customer
  );
}

export default App;
