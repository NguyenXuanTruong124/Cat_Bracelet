import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/UI_Login';
import RoleSelection from './pages/RoleSelection';
import Staff from './pages/Staff';
import Customer from './pages/Customer';
import Admin from './pages/Admin';
import About from './pages/About';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
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
  );
}

export default App;
