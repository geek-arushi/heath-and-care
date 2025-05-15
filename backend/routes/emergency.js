const express = require('express');
const router = express.Router();
const {
  createEmergencyRequest,
  getEmergencyRequests,
  getEmergencyRequest,
  updateEmergencyStatus,
  assignDoctor
} = require('../controllers/emergencyController');
const { protect, authorize } = require('../middleware/auth');

router.route('/').post(createEmergencyRequest).get(protect, getEmergencyRequests);
router.route('/:id').get(protect, getEmergencyRequest);
router.route('/:id/status').put(protect, updateEmergencyStatus);
router.route('/:id/assign-doctor').put(protect, assignDoctor);

module.exports = router;