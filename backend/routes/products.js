const express = require('express');
const router = express.Router();
// Import controllers here
// const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Define routes
// router.route('/').get(getProducts).post(createProduct);
// router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

// Temporary route for testing
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: [] });
});

module.exports = router;