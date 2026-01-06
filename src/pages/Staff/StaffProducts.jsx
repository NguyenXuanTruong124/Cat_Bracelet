import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/Staff.css';

export default function StaffProducts() {
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
            <h2>Sản phẩm đá quý</h2>
            <p>Quản lý danh sách sản phẩm (UI tĩnh)</p>
          </div>
          <div className="actions">
            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input placeholder="Tìm: mã / tên đá..." />
            </div>
            <button className="btn">Xuất</button>
            <button className="btn primary">+ Thêm sản phẩm</button>
          </div>
        </div>

        <div className="card">
          <div className="section-header">
            <h3>Danh sách sản phẩm</h3>
            <div className="hint">Danh sách mẫu (UI tĩnh) • lọc/sort làm sau</div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Loại đá</th>
                  <th>Carat</th>
                  <th>Giá</th>
                  <th>Tồn</th>
                  <th>Trạng thái</th>
                  <th style={{ textAlign: 'right' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['#GEM-1024', 'Ruby đỏ đô', 'Ruby', '1.20', '₫ 18.900.000', '12', 'good'],
                  ['#GEM-1188', 'Sapphire xanh hoàng gia', 'Sapphire', '0.95', '₫ 12.500.000', '3', 'warn'],
                  ['#GEM-1310', 'Emerald Colombia', 'Emerald', '1.05', '₫ 22.700.000', '0', 'bad'],
                  ['#GEM-1402', 'Kim cương Round (Lab)', 'Diamond', '0.70', '₫ 15.300.000', '9', 'good'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td><span className={`tag ${row[2] === 'Ruby' ? 'primary' : ''}`}>{row[2]}</span></td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td>
                      <span className={`tag ${row[6] === 'good' ? 'good' : row[6] === 'warn' ? 'warn' : 'bad'}`}>
                        {row[6] === 'good' ? 'Còn hàng' : row[6] === 'warn' ? 'Sắp hết' : 'Hết hàng'}
                      </span>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="icon-btn" title="Xem">👁️</button>
                        <button className="icon-btn" title="Sửa">✏️</button>
                        <button className="icon-btn" title="Ẩn">🙈</button>
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
