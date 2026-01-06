import { useNavigate, useLocation } from 'react-router-dom';
import "../../styles/Staff.css";

export default function StaffCustomers() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const go = (path) => navigate(path);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">
            <img src="/image/logo_Cat.jpg" alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />
          </div>
          <div>
            <h1>Cat Bracelet</h1>
            <small>Trang quản lý nhân viên</small>
          </div>
        </div>

        <nav className="nav">
          <a className={pathname === '/staff/dashboard' ? 'active' : ''} onClick={() => go('/staff/dashboard')}>
            <span className="dot"></span> Dashboard
          </a>
          <a className={pathname === '/staff/products' ? 'active' : ''} onClick={() => go('/staff/products')}>
            <span className="dot"></span> Sản phẩm đá quý
          </a>
          <a className={pathname === '/staff/orders' ? 'active' : ''} onClick={() => go('/staff/orders')}>
            <span className="dot"></span> Đơn hàng
          </a>
          <a className={pathname === '/staff/customers' ? 'active' : ''} onClick={() => go('/staff/customers')}>
            <span className="dot"></span> Khách hàng
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="pill">Role: <strong>Staff</strong></div>
          <div className="pill">Theme: <strong>Đỏ</strong></div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="title">
            <h2>Khách hàng</h2>
            <p>Theo dõi lịch sử mua và phân nhóm VIP</p>
          </div>
          <div className="actions">
            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input placeholder="Tìm: tên / SĐT / email..." />
            </div>
            <button className="btn">Xuất</button>
          </div>
        </div>

        <div className="card">
          <div className="section-header">
            <h3>Danh sách khách hàng</h3>
            <div className="hint">UI tĩnh</div>
          </div>

          <div className="table-wrap">
            <table style={{ minWidth: '980px' }}>
              <thead>
                <tr>
                  <th>Khách hàng</th>
                  <th>Liên hệ</th>
                  <th>Nhóm</th>
                  <th>Số đơn</th>
                  <th>Tổng chi tiêu</th>
                  <th>Ghi chú</th>
                  <th style={{ textAlign: 'right' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nguyễn Minh Anh', '090x xxx xxx • minh...@mail.com', 'primary', 'VIP', 12, '₫ 186.400.000', 'Thích Ruby, mệnh Hỏa'],
                  ['Trần Quốc Huy', '098x xxx xxx • huy...@mail.com', '', 'Thường', 3, '₫ 27.800.000', 'Ưu tiên COD'],
                  ['Lê Thảo Vy', '093x xxx xxx • vy...@mail.com', 'good', 'VIP mới', 1, '₫ 22.700.000', 'Quan tâm Emerald'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td><span className={`tag ${row[2]}`}>{row[3]}</span></td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td><span className="tag">{row[6]}</span></td>
                    <td>
                      <div className="row-actions">
                        <button className="icon-btn" title="Xem">👁️</button>
                        <button className="icon-btn" title="Sửa">✏️</button>
                        <button className="icon-btn" title="Nhắn">💬</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
