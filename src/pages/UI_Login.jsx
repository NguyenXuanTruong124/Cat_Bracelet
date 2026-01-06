import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (username.trim() === '123' && password.trim() === '123') {
      navigate('/role');
    } else {
      setError('Tài khoản hoặc mật khẩu không đúng!');
    }
  };

  const onKey = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="page login-page">
      <div className="container">
        <header className="header">
          <div className="header-left">
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
            <h1 className="welcome-title">Chào mừng trở lại</h1>
            <p className="welcome-subtitle">Vui lòng đăng nhập để tiếp tục</p>
          </div>

          <div className="login-form">
            <div className="input-section">
              <div className="input-wrapper">
                <i className="fas fa-user input-icon" />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Tài khoản"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={onKey}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="input-section">
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon" />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={onKey}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button className="login-btn" onClick={handleLogin}>
              <span>Đăng nhập</span>
            </button>
          </div>

          <div className="benefits-section">
            <h3 className="benefits-title">Lợi ích khi đăng nhập/đăng ký Cat Bracelet</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-circle" />
                </div>
                <span className="benefit-text">Dễ dàng tra cứu thông tin sản phẩm và đơn hàng</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-circle" />
                </div>
                <span className="benefit-text">Xem lịch sử mua hàng và theo dõi đơn hàng</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-circle" />
                </div>
                <span className="benefit-text">Nhận được ưu đãi và khuyến mãi độc quyền</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
