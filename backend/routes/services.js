const express = require('express');
const router = express.Router();
// Import controllers here
// const { getServices, getService, createService, updateService, deleteService } = require('../controllers/serviceController');

// Define routes
// router.route('/').get(getServices).post(createService);
// router.route('/:id').get(getService).put(updateService).delete(deleteService);

// Temporary route for testing
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: [] });
});

module.exports = router;