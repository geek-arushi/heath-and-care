import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3036/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.get('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me')
};

// Product services
export const productService = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (productData) => api.post('/products', productData),
  updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

// Service services
export const serviceService = {
  getAllServices: () => api.get('/services'),
  getServiceById: (id) => api.get(`/services/${id}`),
  createService: (serviceData) => api.post('/services', serviceData),
  updateService: (id, serviceData) => api.put(`/services/${id}`, serviceData),
  deleteService: (id) => api.delete(`/services/${id}`)
};

// Team services
export const teamService = {
  getAllTeamMembers: () => api.get('/team'),
  getTeamMemberById: (id) => api.get(`/team/${id}`),
  createTeamMember: (teamData) => api.post('/team', teamData),
  updateTeamMember: (id, teamData) => api.put(`/team/${id}`, teamData),
  deleteTeamMember: (id) => api.delete(`/team/${id}`)
};

// Order services
export const orderService = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrderById: (id) => api.get(`/orders/${id}`),
  getUserOrders: () => api.get('/orders/myorders'),
  updateOrderToPaid: (id, paymentResult) => api.put(`/orders/${id}/pay`, paymentResult),
  updateOrderStatus: (id, status) => api.put(`/orders/${id}/status`, { status })
};

// Dashboard services
export const dashboardService = {
  getStats: () => api.get('/dashboard/stats'),
  getAllOrders: () => api.get('/dashboard/orders'),
  getAllUsers: () => api.get('/dashboard/users')
};

// Contact form service
export const contactService = {
  submitContactForm: (formData) => api.post('/contact', formData)
};

// Doctor services
export const doctorService = {
  getAllDoctors: () => api.get('/doctors'),
  getAvailableDoctors: () => api.get('/doctors/available'),
  getDoctorById: (id) => api.get(`/doctors/${id}`),
  updateAvailability: (id, status) => api.put(`/doctors/${id}/availability`, { status })
};

// Blood Bank services
export const bloodBankService = {
  getAllBloodBanks: () => api.get('/bloodbanks'),
  searchBloodAvailability: (bloodType) => api.get(`/bloodbanks/search?bloodType=${bloodType}`),
  getBloodBankById: (id) => api.get(`/bloodbanks/${id}`),
  updateBloodInventory: (id, inventoryData) => api.put(`/bloodbanks/${id}/inventory`, inventoryData)
};

// Emergency services
export const emergencyService = {
  createEmergencyRequest: (requestData) => api.post('/emergency', requestData),
  getEmergencyRequests: () => api.get('/emergency'),
  getEmergencyRequestById: (id) => api.get(`/emergency/${id}`),
  updateEmergencyStatus: (id, status) => api.put(`/emergency/${id}/status`, { status }),
  assignDoctor: (emergencyId, doctorId) => api.put(`/emergency/${emergencyId}/assign-doctor`, { doctorId })
};

// Remove the duplicate dashboardService declaration that was here

// Contact form service is already declared above

export default api;