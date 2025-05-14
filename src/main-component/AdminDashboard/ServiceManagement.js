import React, { useState, useEffect } from 'react';
import { serviceService } from '../../api/apiService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceService.getAllServices();
        setServices(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="admin-management-container">
      <h1>Service Management</h1>
      <div className="management-content">
        <p>This is a placeholder for the service management interface.</p>
        <p>Total Services: {services.length}</p>
        {/* Add your service management UI here */}
      </div>
    </div>
  );
};

export default ServiceManagement;