import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelection.css';

function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('customer');

  const roles = useMemo(
    () => [
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
    ],
    []
  );

  const handleContinue = () => {
    if (selectedRole === 'admin') navigate('/admin');
    else if (selectedRole === 'staff') navigate('/staff/dashboard'); 
    else navigate('/customer');
  };

  return (
    <div className="page role-page">
      <div className="role-shell">
        <div className="role-cardwrap">
          <header className="role-header">
            <button className="role-back" type="button" onClick={() => navigate('/login')}>
              <i className="fas fa-arrow-left" />
              <span>Quay lại</span>
            </button>

            <div className="role-brand" onClick={() => navigate('/')} role="button" tabIndex={0}>
              <div className="role-brand-icon">
                <img src="/image/logo_Cat.jpg" alt="logo" />
              </div>
              <span className="role-brand-text">CAT BRACELET</span>
            </div>
          </header>

          <main className="role-main">
            <div className="role-hero">
              <div className="role-kicker">Choose your role</div>
              <h1 className="role-title">Chọn vai trò của bạn</h1>
              <p className="role-subtitle">Vui lòng chọn vai trò để tiếp tục</p>
            </div>

            <div className="role-grid">
              {roles.map((r) => {
                const active = selectedRole === r.key;
                return (
                  <button
                    key={r.key}
                    type="button"
                    className={`role-item ${active ? 'is-active' : ''}`}
                    onClick={() => setSelectedRole(r.key)}
                    aria-pressed={active}
                  >
                    <div className="role-item-top">
                      <div className="role-icon">
                        <i className={r.icon} />
                      </div>

                      <div className="role-text">
                        <div className="role-item-title">{r.title}</div>
                        <div className="role-item-desc">{r.desc}</div>
                      </div>
                    </div>

                    <div className="role-pill">{r.badge}</div>

                    <div className="role-check" aria-hidden="true">
                      <i className="fas fa-check" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="role-actions">
              <button className="role-continue" type="button" onClick={handleContinue}>
                <span>Tiếp tục</span>
                <i className="fas fa-arrow-right" />
              </button>

              <div className="role-note">
                Bạn có thể đổi vai trò sau khi đăng nhập.
              </div>
            </div>
          </main>
        </div>

        {/* decor (nền) */}
        <div className="role-decor" aria-hidden="true" />
      </div>
    </div>
  );
}

export default RoleSelection;
