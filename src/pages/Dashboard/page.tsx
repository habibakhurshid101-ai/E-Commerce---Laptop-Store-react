import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [userName] = useState('Admin');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      setCurrentTime(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const showToast = (message: string) => {
    alert(message);
  };

  // Chart Data
  const salesData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Units Sold',
        data: [45, 52, 61, 58, 67, 72],
        backgroundColor: 'rgba(26, 86, 219, 0.8)',
      },
    ],
  };

  const categoryData = {
    labels: ['Laptops', 'Desktops', 'Gaming', 'Accessories', 'Workstations'],
    datasets: [
      {
        data: [44, 18, 18, 36, 8],
        backgroundColor: [
          'rgba(26, 86, 219, 0.8)',
          'rgba(124, 58, 237, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(6, 214, 160, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
      },
    ],
  };

  const revenueData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Revenue (PKR)',
        data: [1800000, 2100000, 2400000, 2200000, 2600000, 2400000],
        borderColor: 'rgba(6, 214, 160, 1)',
        backgroundColor: 'rgba(6, 214, 160, 0.1)',
        fill: true,
      },
    ],
  };

  const stockStatusData = {
    labels: ['In Stock', 'Low Stock', 'Out of Stock'],
    datasets: [
      {
        data: [98, 18, 8],
        backgroundColor: [
          'rgba(6, 214, 160, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#cbd5e1',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          color: '#cbd5e1',
        },
      },
    },
  };

  return (
    <div className="page">
      {/* WELCOME BANNER */}
      <div className="dash-top">
        <div>
          <div className="dash-role-badge">⚙️ Admin Panel</div>
          <h1>
            Stock Management <span className="text-gradient">Dashboard</span>
          </h1>
          <p>
            Welcome back, <strong id="dashUserName">{userName}</strong> 👋 &nbsp;—&nbsp;{' '}
            <span id="dashDateTime">{currentTime}</span>
          </p>
        </div>
        <div className="dash-top-actions">
          <button onClick={() => showToast('Quick Add Stock feature coming soon!')}>
            ➕ Quick Add Stock
          </button>
          <button className="border-button">View Store →</button>
        </div>
      </div>

      {/* STOCK ACTION CARDS */}
      <div className="dash-section-label">📦 Stock Operations</div>
      <div className="dash-actions">
        <div
          className="action-card"
          data-color="blue"
          onClick={() => showToast('View Stock')}
        >
          <div className="action-card-icon">📋</div>
          <div className="action-card-body">
            <h3>View All Stock</h3>
            <p>Browse complete inventory with search & filter tools</p>
          </div>
          <div className="action-card-arrow">→</div>
        </div>

        <div
          className="action-card"
          data-color="green"
          onClick={() => showToast('Insert Stock')}
        >
          <div className="action-card-icon">➕</div>
          <div className="action-card-body">
            <h3>Insert New Stock</h3>
            <p>Add new laptop or accessory to your inventory</p>
          </div>
          <div className="action-card-arrow">→</div>
        </div>

        <div
          className="action-card"
          data-color="amber"
          onClick={() => showToast('Update Stock')}
        >
          <div className="action-card-icon">✏️</div>
          <div className="action-card-body">
            <h3>Update Stock</h3>
            <p>Edit product details, price, or stock quantity</p>
          </div>
          <div className="action-card-arrow">→</div>
        </div>

        <div
          className="action-card"
          data-color="red"
          onClick={() => showToast('Delete Stock')}
        >
          <div className="action-card-icon">🗑️</div>
          <div className="action-card-body">
            <h3>Delete Stock</h3>
            <p>Remove discontinued or out-of-stock items</p>
          </div>
          <div className="action-card-arrow">→</div>
        </div>
      </div>

      {/* KPI STAT CARDS */}
      <div className="dash-section-label">📊 Key Metrics</div>
      <div className="card-container dash-stats">
        <div className="card stat-card">
          <div className="icon-circle">📦</div>
          <div>
            <h3 id="kpiTotalStock">124</h3>
            <p>Total Stock Items</p>
          </div>
        </div>
        <div className="card stat-card">
          <div
            className="icon-circle"
            style={{
              background: 'rgba(239,68,68,0.15)',
              borderColor: 'rgba(239,68,68,0.3)',
            }}
          >
            ⚠️
          </div>
          <div>
            <h3 id="kpiLowStock" style={{ color: '#f87171' }}>
              8
            </h3>
            <p>Low Stock Alerts</p>
          </div>
        </div>
        <div className="card stat-card">
          <div
            className="icon-circle"
            style={{
              background: 'rgba(6,214,160,0.15)',
              borderColor: 'rgba(6,214,160,0.3)',
            }}
          >
            💰
          </div>
          <div>
            <h3 id="kpiRevenue" style={{ color: '#06d6a0' }}>
              Rs.2.4M
            </h3>
            <p>Revenue This Month</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="icon-circle">🛒</div>
          <div>
            <h3 id="kpiOrders">47</h3>
            <p>Orders This Month</p>
          </div>
        </div>
        <div className="card stat-card">
          <div
            className="icon-circle"
            style={{
              background: 'rgba(124,58,237,0.15)',
              borderColor: 'rgba(124,58,237,0.3)',
            }}
          >
            👥
          </div>
          <div>
            <h3 style={{ color: '#a78bfa' }}>1.2K</h3>
            <p>Active Customers</p>
          </div>
        </div>
        <div className="card stat-card">
          <div
            className="icon-circle"
            style={{
              background: 'rgba(14,165,233,0.15)',
              borderColor: 'rgba(14,165,233,0.3)',
            }}
          >
            🛡️
          </div>
          <div>
            <h3 style={{ color: '#38bdf8' }}>96%</h3>
            <p>Fulfilment Rate</p>
          </div>
        </div>
      </div>

      {/* CHARTS ROW */}
      <div className="dash-section-label">📈 Analytics & Graphical View</div>
      <div className="dash-charts">
        <div className="chart-box">
          <div className="chart-box-header">
            <div>
              <h3>Monthly Sales Volume</h3>
              <p>Units sold per month — last 6 months</p>
            </div>
            <span className="chip" data-color="sky">
              Bar Chart
            </span>
          </div>
          <div className="chart-canvas-wrap">
            <Bar data={salesData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-box">
          <div className="chart-box-header">
            <div>
              <h3>Stock by Category</h3>
              <p>Current inventory distribution</p>
            </div>
            <span className="chip" data-color="purple">
              Doughnut
            </span>
          </div>
          <div className="chart-canvas-wrap">
            <Doughnut data={categoryData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      <div className="dash-charts" style={{ marginTop: '20px' }}>
        <div className="chart-box chart-box-wide">
          <div className="chart-box-header">
            <div>
              <h3>Revenue Trend</h3>
              <p>Monthly revenue (PKR) — last 6 months</p>
            </div>
            <span className="chip" data-color="green">
              Line Chart
            </span>
          </div>
          <div className="chart-canvas-wrap">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-box">
          <div className="chart-box-header">
            <div>
              <h3>Stock Status</h3>
              <p>In-stock vs low vs out-of-stock</p>
            </div>
            <span className="chip" data-color="amber">
              Pie Chart
            </span>
          </div>
          <div className="chart-canvas-wrap">
            <Pie data={stockStatusData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="dash-section-label">🔗 Quick Navigation</div>
      <div className="dash-links">
        <a href="#" className="quick-link" onClick={() => showToast('Products')}>
          <div className="quick-link-icon">🖥️</div>
          <div>
            <strong>All Products</strong>
            <p>Browse & manage</p>
          </div>
        </a>
        <a href="#" className="quick-link" onClick={() => showToast('Laptops')}>
          <div className="quick-link-icon">💻</div>
          <div>
            <strong>Laptops</strong>
            <p>44 models</p>
          </div>
        </a>
        <a href="#" className="quick-link" onClick={() => showToast('Gaming')}>
          <div className="quick-link-icon">🎮</div>
          <div>
            <strong>Gaming</strong>
            <p>18 models</p>
          </div>
        </a>
        <a href="#" className="quick-link" onClick={() => showToast('Accessories')}>
          <div className="quick-link-icon">🖱️</div>
          <div>
            <strong>Accessories</strong>
            <p>36 items</p>
          </div>
        </a>
        <a href="#" className="quick-link" onClick={() => showToast('Orders')}>
          <div className="quick-link-icon">📦</div>
          <div>
            <strong>Orders</strong>
            <p>Pending: 12</p>
          </div>
        </a>
        <a href="#" className="quick-link" onClick={() => showToast('Warranty')}>
          <div className="quick-link-icon">🛡️</div>
          <div>
            <strong>Warranties</strong>
            <p>Manage plans</p>
          </div>
        </a>
      </div>

      {/* ACCOUNT SECTION */}
      <div className="dash-section-label" style={{ marginTop: '48px' }}>
        👤 Account
      </div>
      <div className="account-cols">
        <div className="card account-card">
          <h3>Account Details</h3>
          <div className="account-rows">
            <div className="account-row">
              <p>Full Name</p>
              <p>Ahmed Khan</p>
            </div>
            <div className="account-row">
              <p>Email</p>
              <p>ahmed@lapelite.pk</p>
            </div>
            <div className="account-row">
              <p>Phone</p>
              <p>+92 300 1234567</p>
            </div>
            <div className="account-row">
              <p>Role</p>
              <p>
                <span className="chip" data-color="purple">
                  Admin
                </span>
              </p>
            </div>
            <div className="account-row">
              <p>Member Since</p>
              <p>Jan 2024</p>
            </div>
          </div>
          <div className="account-edit">
            <button className="border-button sm-button" style={{ width: '100%' }}>
              Edit Profile
            </button>
          </div>
        </div>

        <div className="card account-card">
          <h3>Shipping Address</h3>
          <div className="address-rows">
            <p>Ahmed Khan</p>
            <p>House #42, Street 7, F-8/4</p>
            <p>Islamabad, Punjab 44000, Pakistan</p>
            <p>+92 300 1234567</p>
          </div>
          <div className="address-actions">
            <button className="border-button sm-button">Edit</button>
            <button className="sm-button">+ Add New</button>
          </div>
        </div>

        <div className="card account-card">
          <h3>Store Summary</h3>
          <div className="account-rows">
            <div className="account-row">
              <p>Total Products</p>
              <p id="summaryProducts">124</p>
            </div>
            <div className="account-row">
              <p>Categories</p>
              <p>5</p>
            </div>
            <div className="account-row">
              <p>Active Orders</p>
              <p>12</p>
            </div>
            <div className="account-row">
              <p>Last Updated</p>
              <p id="summaryLastUpdated">Today</p>
            </div>
          </div>
          <div className="account-edit">
            <button
              className="sm-button"
              style={{ width: '100%' }}
              onClick={() => showToast('Add Stock')}
            >
              ➕ Add Stock Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
