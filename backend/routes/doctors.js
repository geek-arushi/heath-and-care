const express = require('express');
const router = express.Router();
const {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  verifyDoctor,
  updateAvailability,
  getAvailableDoctors
} = require('../controllers/doctorController');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(getDoctors).post(protect, authorize('admin'), createDoctor);
router.route('/available').get(getAvailableDoctors);
router.route('/:id').get(getDoctor).put(protect, authorize('admin'), updateDoctor);
router.route('/:id/verify').put(protect, authorize('admin'), verifyDoctor);
router.route('/:id/availability').put(protect, updateAvailability);

module.exports = router;