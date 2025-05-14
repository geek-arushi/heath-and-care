import React, { useState, useEffect } from 'react';
import { productService } from '../../api/apiService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts();
        setProducts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="admin-management-container">
      <h1>Product Management</h1>
      <div className="management-content">
        <p>This is a placeholder for the product management interface.</p>
        <p>Total Products: {products.length}</p>
        {/* Add your product management UI here */}
      </div>
    </div>
  );
};

export default ProductManagement;