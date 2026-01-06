import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Staff.css';

function Staff() {
  const navigate = useNavigate();
  const [active, setActive] = useState('#dashboard');

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash || '#dashboard';
      setActive(hash);
    };
    window.addEventListener('hashchange', handler);
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const goSection = (hash) => {
    setActive(hash);
    window.location.hash = hash;
  };

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
          <a className={active === '#dashboard' ? 'active' : ''} onClick={() => goSection('#dashboard')}>
            <span className="dot"></span> Dashboard
          </a>
          <a className={active === '#products' ? 'active' : ''} onClick={() => goSection('#products')}>
            <span className="dot"></span> Sản phẩm đá quý
          </a>
          <a className={active === '#orders' ? 'active' : ''} onClick={() => goSection('#orders')}>
            <span className="dot"></span> Đơn hàng
          </a>
          <a className={active === '#customers' ? 'active' : ''} onClick={() => goSection('#customers')}>
            <span className="dot"></span> Khách hàng
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="pill">Role: <strong>Staff</strong></div>
          <div className="pill">Theme: <strong>Đỏ</strong></div>
        </div>
      </aside>

      <main className="main" id="dashboard">
        <div className="topbar">
          <div className="title">
            <h2>Dashboard</h2>
            <p>Tổng quan hoạt động cửa hàng (mẫu UI tĩnh)</p>
          </div>

          <div className="actions">
            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input placeholder="Tìm nhanh: mã đơn / tên đá / khách hàng..." />
            </div>
            <button className="btn">Xuất báo cáo</button>
            <button className="btn primary">+ Thêm sản phẩm</button>
          </div>
        </div>

        <section className="grid stats">
          <div className="card stat span-4">
            <div className="label">Doanh thu</div>
            <div className="kpi">
              <div className="value">₫ 12.450.000</div>
              <span className="badge primary"><span className="b"></span> +8.2%</span>
            </div>
            <div className="sub">
              <span className="badge"><span className="b"></span> Tuần: ₫ 68.200.000</span>
              <span className="badge"><span className="b"></span> Tháng: ₫ 285.900.000</span>
            </div>
          </div>

          <div className="card stat span-4">
            <div className="label">Số đơn hàng mới</div>
            <div className="kpi">
              <div className="value">24</div>
              <span className="badge good"><span className="b"></span> 6 đơn/giờ</span>
            </div>
            <div className="sub">
              <span className="badge primary"><span className="b"></span> Đang xử lý: 11</span>
              <span className="badge warn"><span className="b"></span> Hoàn tiền: 2</span>
              <span className="badge bad"><span className="b"></span> Hủy: 1</span>
            </div>
          </div>

          <div className="card stat span-4">
            <div className="label">Tồn kho sản phẩm</div>
            <div className="kpi">
              <div className="value">312</div>
              <span className="badge warn"><span className="b"></span> Sắp hết: 18</span>
            </div>
            <div className="sub">
              <span className="badge good"><span className="b"></span> Còn hàng: 294</span>
              <span className="badge"><span className="b"></span> Ẩn: 9</span>
            </div>
          </div>

          <div className="card stat span-3">
            <div className="label">Khách hàng mới</div>
            <div className="kpi">
              <div className="value">15</div>
              <span className="badge primary"><span className="b"></span> +5 hôm nay</span>
            </div>
            <div className="sub">
              <span className="badge"><span className="b"></span> VIP mới: 2</span>
            </div>
          </div>

          <div className="card stat span-3">
            <div className="label">Đơn đang xử lý</div>
            <div className="kpi">
              <div className="value">11</div>
              <span className="badge primary"><span className="b"></span> SLA 24h</span>
            </div>
            <div className="sub">
              <span className="badge warn"><span className="b"></span> Chờ xác nhận: 4</span>
              <span className="badge"><span className="b"></span> Đóng gói: 5</span>
              <span className="badge"><span className="b"></span> Đang giao: 2</span>
            </div>
          </div>

          <div className="card stat span-6">
            <div className="label">Hoàn tiền / Hủy</div>
            <div className="kpi">
              <div className="value">3</div>
              <span className="badge bad"><span className="b"></span> cần xử lý</span>
            </div>
            <div className="sub">
              <span className="badge warn"><span className="b"></span> Hoàn tiền: 2 (đang chờ duyệt)</span>
              <span className="badge bad"><span className="b"></span> Hủy: 1 (hết hàng)</span>
            </div>
          </div>
        </section>

        <section className="grid lower">
          <div className="card span-6" id="products">
            <div className="section-header">
              <h3>Quản lý sản phẩm đá quý</h3>
              <div className="hint">Danh sách mẫu (UI tĩnh) • lọc/sort sẽ làm sau</div>
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
                      <td><span className={`tag ${row[6] === 'good' ? 'good' : row[6] === 'warn' ? 'warn' : 'bad'}`}>{row[6] === 'good' ? 'Còn hàng' : row[6] === 'warn' ? 'Sắp hết' : 'Hết hàng'}</span></td>
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

          <div className="card span-6" id="orders">
            <div className="section-header">
              <h3>Quản lý đơn hàng</h3>
              <div className="hint">Trạng thái: Pending / Processing / Delivered / Refund / Canceled</div>
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

          <div className="card span-12" id="customers">
            <div className="section-header">
              <h3>Quản lý khách hàng</h3>
              <div className="hint">Theo dõi lịch sử mua và phân nhóm VIP</div>
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
        </section>
      </main>
    </div>
  );
}

export default Staff;
