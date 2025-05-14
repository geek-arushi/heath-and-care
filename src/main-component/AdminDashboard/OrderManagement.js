import React, { useState, useEffect } from 'react';
import { orderService } from '../../api/apiService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getAllOrders();
        setOrders(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="admin-management-container">
      <h1>Order Management</h1>
      <div className="management-content">
        <p>This is a placeholder for the order management interface.</p>
        <p>Total Orders: {orders.length}</p>
        {/* Add your order management UI here */}
      </div>
    </div>
  );
};

export default OrderManagement;