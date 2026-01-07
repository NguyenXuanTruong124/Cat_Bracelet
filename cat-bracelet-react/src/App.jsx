import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/UI_Login';
import RoleSelection from './pages/RoleSelection';
import Staff from './pages/Staff';
import Customer from './pages/Customer';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/roles" element={<RoleSelection />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
