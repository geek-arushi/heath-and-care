const express = require('express');
const router = express.Router();
const { getDashboardStats, getAllOrders, getAllUsers } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/auth');

// All routes are protected and require admin role
router.use(protect);
router.use(authorize('admin'));

router.get('/stats', getDashboardStats);
router.get('/orders', getAllOrders);
router.get('/users', getAllUsers);

module.exports = router;