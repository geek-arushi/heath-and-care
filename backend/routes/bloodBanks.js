const express = require('express');
const router = express.Router();
const {
  getBloodBanks,
  getBloodBank,
  createBloodBank,
  updateBloodBank,
  updateBloodInventory,
  searchBloodAvailability
} = require('../controllers/bloodBankController');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(getBloodBanks).post(protect, authorize('admin'), createBloodBank);
router.route('/search').get(searchBloodAvailability);
router.route('/:id').get(getBloodBank).put(protect, authorize('admin'), updateBloodBank);
router.route('/:id/inventory').put(protect, updateBloodInventory);

module.exports = router;