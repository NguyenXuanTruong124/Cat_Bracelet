import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/Staff.css';

export default function StaffOrders() {
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
            <h2>Đơn hàng</h2>
            <p>Pending / Processing / Delivered / Refund / Canceled</p>
          </div>
          <div className="actions">
            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input placeholder="Tìm: mã đơn / khách..." />
            </div>
            <button className="btn">Xuất</button>
          </div>
        </div>

        <div className="card">
          <div className="section-header">
            <h3>Danh sách đơn hàng</h3>
            <div className="hint">UI tĩnh</div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Mã đơn</th>
                  <th>Khách</th>
                  <th>Tổng tiền</th>
                  <th>Thanh toán</th>
                  <th>Trạng thái</th>
                  <th>Ngày</th>
                  <th style={{ textAlign: 'right' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['#ORD-90021', 'Nguyễn Minh Anh', '₫ 18.900.000', 'Chuyển khoản', 'primary', 'Đang xử lý', '05/01/2026'],
                  ['#ORD-90018', 'Trần Quốc Huy', '₫ 12.500.000', 'COD', 'warn', 'Chờ xác nhận', '05/01/2026'],
                  ['#ORD-89977', 'Lê Thảo Vy', '₫ 22.700.000', 'Online', 'good', 'Hoàn tất', '04/01/2026'],
                  ['#ORD-89911', 'Phạm Gia Bảo', '₫ 15.300.000', 'Chuyển khoản', 'bad', 'Hoàn tiền', '03/01/2026'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td><span className="tag">{row[3]}</span></td>
                    <td><span className={`tag ${row[4]}`}>{row[5]}</span></td>
                    <td>{row[6]}</td>
                    <td>
                      <div className="row-actions">
                        <button className="icon-btn" title="Chi tiết">📄</button>
                        <button className="icon-btn" title="Cập nhật">🔁</button>
                        <button className="icon-btn" title="In">🖨️</button>
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
