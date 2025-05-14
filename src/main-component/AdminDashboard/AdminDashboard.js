import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dashboardService } from '../../api/apiService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await dashboardService.getStats();
        setStats(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Products</h3>
          <p className="stat-number">{stats.productsCount}</p>
          <Link to="/admin/products" className="view-more">Manage Products</Link>
        </div>
        
        <div className="stat-card">
          <h3>Services</h3>
          <p className="stat-number">{stats.servicesCount}</p>
          <Link to="/admin/services" className="view-more">Manage Services</Link>
        </div>
        
        <div className="stat-card">
          <h3>Team Members</h3>
          <p className="stat-number">{stats.teamCount}</p>
          <Link to="/admin/team" className="view-more">Manage Team</Link>
        </div>
        
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">{stats.ordersCount}</p>
          <Link to="/admin/orders" className="view-more">Manage Orders</Link>
        </div>
        
        <div className="stat-card">
          <h3>Users</h3>
          <p className="stat-number">{stats.usersCount}</p>
        </div>
        
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">${stats.totalRevenue.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentOrders.map(order => (
              <tr key={order._id}>
                <td>#{order._id.substring(0, 8)}</td>
                <td>{order.user?.name || 'Guest'}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                <td>
                  <Link to={`/admin/orders/${order._id}`} className="view-btn">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="order-status-chart">
        <h2>Order Status</h2>
        <div className="status-bars">
          <div className="status-bar">
            <div className="label">Pending</div>
            <div className="bar">
              <div className="fill pending" style={{ width: `${(stats.orderStatus.pending / stats.ordersCount) * 100}%` }}></div>
            </div>
            <div className="count">{stats.orderStatus.pending}</div>
          </div>
          
          <div className="status-bar">
            <div className="label">Processing</div>
            <div className="bar">
              <div className="fill processing" style={{ width: `${(stats.orderStatus.processing / stats.ordersCount) * 100}%` }}></div>
            </div>
            <div className="count">{stats.orderStatus.processing}</div>
          </div>
          
          <div className="status-bar">
            <div className="label">Shipped</div>
            <div className="bar">
              <div className="fill shipped" style={{ width: `${(stats.orderStatus.shipped / stats.ordersCount) * 100}%` }}></div>
            </div>
            <div className="count">{stats.orderStatus.shipped}</div>
          </div>
          
          <div className="status-bar">
            <div className="label">Delivered</div>
            <div className="bar">
              <div className="fill delivered" style={{ width: `${(stats.orderStatus.delivered / stats.ordersCount) * 100}%` }}></div>
            </div>
            <div className="count">{stats.orderStatus.delivered}</div>
          </div>
          
          <div className="status-bar">
            <div className="label">Cancelled</div>
            <div className="bar">
              <div className="fill cancelled" style={{ width: `${(stats.orderStatus.cancelled / stats.ordersCount) * 100}%` }}></div>
            </div>
            <div className="count">{stats.orderStatus.cancelled}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;