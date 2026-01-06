import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/UI_Login';
import RoleSelection from './pages/RoleSelection';
import Staff from './pages/Staff';
import Customer from './pages/Customer';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
