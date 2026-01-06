import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelection.css';

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState('customer');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === 'admin') navigate('/admin');
    else if (selectedRole === 'staff') navigate('/staff/dashboard'); 
    else navigate('/customer');
  };

  return (
    <div className="page role-page">
      <div className="container">
        <header className="header">
          <div className="header-left" onClick={() => navigate('/login')}>
            <i className="fas fa-arrow-left" />
            <span>Quay lại</span>
          </div>
          <div className="header-right">
            <div className="logo">
              <div className="logo-icon">
                <img src="/image/logo_Cat.jpg" alt="logo" />
              </div>
              <span className="logo-text">CAT BRACELET</span>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="welcome-section">
            <h1 className="welcome-title">Chọn vai trò của bạn</h1>
            <p className="welcome-subtitle">Vui lòng chọn vai trò để tiếp tục</p>
          </div>

          <div className="role-selection">
            {[
              {
                key: 'admin',
                icon: 'fas fa-user-shield',
                title: 'Admin',
                desc: 'Quản lý hệ thống và toàn bộ chức năng',
                badge: 'Quản trị viên',
              },
              {
                key: 'staff',
                icon: 'fas fa-user-tie',
                title: 'Staff',
                desc: 'Quản lý đơn hàng và hỗ trợ khách hàng',
                badge: 'Nhân viên',
              },
              {
                key: 'customer',
                icon: 'fas fa-user',
                title: 'Customer',
                desc: 'Mua sắm và quản lý đơn hàng của bạn',
                badge: 'Khách hàng',
              },
            ].map((role) => (
              <div
                key={role.key}
                className={`role-card ${selectedRole === role.key ? 'active' : ''}`}
                onClick={() => setSelectedRole(role.key)}
              >
                <div className="role-icon">
                  <i className={role.icon} />
                </div>
                <h3 className="role-title">{role.title}</h3>
                <p className="role-description">{role.desc}</p>
                <div className="role-badge">{role.badge}</div>
              </div>
            ))}
          </div>

          <button className="continue-btn" onClick={handleContinue}>
            <span>Tiếp tục</span>
            <i className="fas fa-arrow-right" />
          </button>
        </main>
      </div>
    </div>
  );
}

export default RoleSelection;
