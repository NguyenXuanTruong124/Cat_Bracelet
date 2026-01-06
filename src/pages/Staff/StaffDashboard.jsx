import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import '../../styles/Staff.css';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function StaffDashboard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const go = (path) => navigate(path);

  // ===== Doanh thu hôm nay (Chart giống ảnh 3) =====
  // 2 line: solid (doanh thu), dashed (mốc/so sánh)
  const revenueSeries = [
    { label: 'Jan', a: 22, b: 18 },
    { label: 'Feb', a: 38, b: 30 },
    { label: 'Mar', a: 26, b: 24 },
    { label: 'Apr', a: 31, b: 28 },
    { label: 'May', a: 68, b: 52 },
    { label: 'Jun', a: 44, b: 40 },
    { label: 'Jul', a: 56, b: 46 },
  ];

  // ===== Tồn kho (Donut giống ảnh 4) =====
  const inventory = [
    { name: 'Còn hàng', value: 294 },
    { name: 'Sắp hết', value: 18 },
    { name: 'Ẩn', value: 9 },
  ];
  const inventoryColors = ['#dc2626', '#f59e0b', '#d1d5db']; // theo theme ảnh 2
  const totalInventory = inventory.reduce((s, x) => s + x.value, 0);

  // ===== Trạng thái đơn (Donut) =====
  const orderStatus = [
    { name: 'Đang xử lý', value: 11 },
    { name: 'Hoàn tất', value: 9 },
    { name: 'Hoàn tiền', value: 3 },
  ];

  // ===== Doanh thu: switch range =====
const [revRange, setRevRange] = useState('today'); // 'today' | '7d' | '30d'

const revenueToday = [
  { label: '09h', a: 2, b: 1 },
  { label: '10h', a: 4, b: 3 },
  { label: '11h', a: 6, b: 5 },
  { label: '12h', a: 5, b: 4 },
  { label: '13h', a: 7, b: 6 },
  { label: '14h', a: 9, b: 8 },
  { label: '15h', a: 8, b: 7 },
];

const revenue7d = [
  { label: 'T2', a: 8, b: 6 },
  { label: 'T3', a: 12, b: 9 },
  { label: 'T4', a: 10, b: 8 },
  { label: 'T5', a: 15, b: 11 },
  { label: 'T6', a: 18, b: 14 },
  { label: 'T7', a: 14, b: 12 },
  { label: 'CN', a: 20, b: 16 },
];

const revenue30d = Array.from({ length: 30 }, (_, i) => ({
  label: `${i + 1}`,
  a: Math.max(2, Math.round(10 + Math.sin(i / 3) * 6 + (i % 4))),
  b: Math.max(2, Math.round(8 + Math.cos(i / 4) * 5 + (i % 3))),
}));

const revenueData = useMemo(() => {
  if (revRange === 'today') return revenueToday;
  if (revRange === '7d') return revenue7d;
  return revenue30d;
}, [revRange]);

  const statusColors = ['#f59e0b', '#10b981', '#ef4444'];
  const totalOrders = orderStatus.reduce((s, x) => s + x.value, 0);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">
            <img
              src="/image/logo_Cat.jpg"
              alt="logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
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
  <div className="staff-info">
    <div className="staff-avatar">
      <img
        src="/image/Hien.jpg"
        alt="Staff avatar"
      />
    </div>

    <div className="staff-meta">
      <div className="staff-role">
        Role: <strong>Staff</strong>
      </div>
      <div className="staff-name">Nhân viên</div>
    </div>
  </div>
</div>

      </aside>

      <main className="main">
        <div className="topbar">
          <div className="title">
            <h2>Dashboard</h2>
            <p>Tổng quan hoạt động cửa hàng</p>
          </div>

          <div className="actions">
            <div className="search">
              <input placeholder="Tìm nhanh: mã đơn / tên đá / khách hàng..." />
            </div>
            <button className="btn">Xuất báo cáo</button>
            <button className="btn primary">+ Thêm sản phẩm</button>
          </div>
        </div>
        {/* HÀNG 1: Line chart FULL WIDTH */}
<section className="grid dash-full">
  <div className="card chart-like-3 span-12">
  <div className="dash-card-head">
  <div>
    <div className="dash-card-title">Doanh thu</div>
    <div className="dash-card-sub">
      {revRange === 'today' ? 'Theo giờ (hôm nay)' : revRange === '7d' ? '7 ngày gần nhất' : '30 ngày gần nhất'}
    </div>
  </div>

  <div className="seg">
    <button className={`seg-btn ${revRange === 'today' ? 'active' : ''}`} onClick={() => setRevRange('today')}>
      Hôm nay
    </button>
    <button className={`seg-btn ${revRange === '7d' ? 'active' : ''}`} onClick={() => setRevRange('7d')}>
      1 tuần
    </button>
    <button className={`seg-btn ${revRange === '30d' ? 'active' : ''}`} onClick={() => setRevRange('30d')}>
      1 tháng
    </button>
  </div>
</div>


    <div className="dchart">
      <ResponsiveContainer width="100%" height="100%">
      <LineChart data={revenueData} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
  <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
  <XAxis
    dataKey="label"
    interval={revRange === '30d' ? 4 : 0}
    tick={{ fill: '#6b7280', fontSize: 12 }}
    axisLine={false}
    tickLine={false}
  />
  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} width={34} />
  <Tooltip
    contentStyle={{
      borderRadius: 12,
      border: '1px solid rgba(0,0,0,0.08)',
      fontSize: 12,
    }}
  />
  <Line type="monotone" dataKey="a" stroke="#dc2626" strokeWidth={3} dot={false} />
  <Line type="monotone" dataKey="b" stroke="#b91c1c" strokeWidth={2.5} strokeDasharray="4 4" dot={false} />
</LineChart>

      </ResponsiveContainer>
    </div>
  </div>
</section>

{/* HÀNG 2: 2 DONUT CHIA ĐÔI */}
<section className="grid dash-two">
  {/* Donut tồn kho */}
  <div className="card donut-like-4 span-6">
    <div className="dash-card-head">
      <div>
        <div className="dash-card-title">Tồn kho</div>
        <div className="dash-card-sub">Tổng: {totalInventory}</div>
      </div>
    </div>

    <div className="donut-mid">
      <div className="donut-ring" style={{ width: 180, height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={inventory} dataKey="value" nameKey="name" innerRadius={64} outerRadius={88} paddingAngle={2} stroke="none">
              {inventory.map((_, i) => (
                <Cell key={i} fill={inventoryColors[i % inventoryColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="donut-legend">
        {inventory.map((s, i) => (
          <div className="donut-item" key={s.name}>
            <span className="donut-left">
              <span className="dotc" style={{ background: inventoryColors[i] }} />
              {s.name}
            </span>
            <span className="donut-right">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Donut trạng thái đơn */}
  <div className="card donut-card span-6">
    <div className="dash-card-head">
      <div>
        <div className="dash-card-title">Trạng thái đơn</div>
        <div className="dash-card-sub">Tổng: {totalOrders}</div>
      </div>
    </div>

    <div className="donut-mid">
      <div className="donut-ring">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={orderStatus} dataKey="value" nameKey="name" innerRadius={52} outerRadius={78} paddingAngle={3} stroke="none">
              {orderStatus.map((_, i) => (
                <Cell key={i} fill={statusColors[i % statusColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="donut-legend">
        {orderStatus.map((s, i) => (
          <div className="donut-item" key={s.name}>
            <span className="donut-left">
              <span className="dotc" style={{ background: statusColors[i] }} />
              {s.name}
            </span>
            <span className="donut-right">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
