const express = require('express');
const router = express.Router();
// Import controllers here
// const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Define routes
// router.route('/').get(getOrders).post(createOrder);
// router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder);

// Temporary route for testing
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: [] });
});

module.exports = router;