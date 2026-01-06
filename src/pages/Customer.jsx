import { useNavigate } from 'react-router-dom';
import '../styles/Customer.css';

function Customer() {
  const navigate = useNavigate();
  return (
    <div className="page customer-page">
      <div className="container">
        <header className="header">
          <div className="header-left" onClick={() => navigate('/role')}>
            <i className="fas fa-arrow-left" id="backBtn" />
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
            <div className="user-avatar">
              <i className="fas fa-user" />
            </div>
            <h1 className="welcome-title">Chào mừng bạn!</h1>
            <p className="welcome-subtitle">Trang quản lý dành cho khách hàng</p>
          </div>

          <div className="quick-actions">
            <h2 className="section-title">Chức năng nhanh</h2>
            <div className="action-grid">
              {[
                { icon: 'fas fa-shopping-bag', title: 'Sản phẩm', desc: 'Xem danh sách sản phẩm' },
                { icon: 'fas fa-shopping-cart', title: 'Giỏ hàng', desc: 'Xem giỏ hàng của bạn' },
                { icon: 'fas fa-box', title: 'Đơn hàng', desc: 'Theo dõi đơn hàng' },
                { icon: 'fas fa-user-circle', title: 'Tài khoản', desc: 'Thông tin tài khoản' },
              ].map((item) => (
                <div className="action-card" key={item.title}>
                  <div className="action-icon">
                    <i className={item.icon} />
                  </div>
                  <h3 className="action-title">{item.title}</h3>
                  <p className="action-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-orders">
            <h2 className="section-title">Đơn hàng gần đây</h2>
            <div className="orders-list">
              <div className="order-item">
                <div className="order-info">
                  <div className="order-id">#ORD001</div>
                  <div className="order-date">12/01/2024</div>
                </div>
                <div className="order-status status-pending">Đang xử lý</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <div className="order-id">#ORD002</div>
                  <div className="order-date">10/01/2024</div>
                </div>
                <div className="order-status status-completed">Hoàn thành</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customer;
