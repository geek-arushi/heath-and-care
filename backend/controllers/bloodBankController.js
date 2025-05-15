const BloodBank = require('../models/BloodBank');

// @desc    Get all blood banks
// @route   GET /api/bloodbanks
// @access  Public
exports.getBloodBanks = async (req, res, next) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.status(200).json({ success: true, count: bloodBanks.length, data: bloodBanks });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Get single blood bank
// @route   GET /api/bloodbanks/:id
// @access  Public
exports.getBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await BloodBank.findById(req.params.id);
    if (!bloodBank) {
      return res.status(404).json({ success: false, error: 'Blood bank not found' });
    }
    res.status(200).json({ success: true, data: bloodBank });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Create new blood bank
// @route   POST /api/bloodbanks
// @access  Private/Admin
exports.createBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await BloodBank.create(req.body);
    res.status(201).json({ success: true, data: bloodBank });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update blood bank
// @route   PUT /api/bloodbanks/:id
// @access  Private/Admin
exports.updateBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await BloodBank.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bloodBank) {
      return res.status(404).json({ success: false, error: 'Blood bank not found' });
    }
    res.status(200).json({ success: true, data: bloodBank });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update blood inventory
// @route   PUT /api/bloodbanks/:id/inventory
// @access  Private
exports.updateBloodInventory = async (req, res, next) => {
  try {
    const { bloodType, quantity } = req.body;
    
    if (!['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(bloodType)) {
      return res.status(400).json({ success: false, error: 'Invalid blood type' });
    }
    
    const bloodBank = await BloodBank.findById(req.params.id);
    
    if (!bloodBank) {
      return res.status(404).json({ success: false, error: 'Blood bank not found' });
    }
    
    // Find the blood type in inventory or create new entry
    const bloodInventoryItem = bloodBank.bloodInventory.find(item => item.bloodType === bloodType);
    
    if (bloodInventoryItem) {
      bloodInventoryItem.quantity = quantity;
      bloodInventoryItem.lastUpdated = Date.now();
    } else {
      bloodBank.bloodInventory.push({
        bloodType,
        quantity,
        lastUpdated: Date.now()
      });
    }
    
    await bloodBank.save();
    
    res.status(200).json({ success: true, data: bloodBank });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Search blood availability
// @route   GET /api/bloodbanks/search
// @access  Public
exports.searchBloodAvailability = async (req, res, next) => {
  try {
    const { bloodType } = req.query;
    
    if (!bloodType) {
      return res.status(400).json({ success: false, error: 'Blood type is required' });
    }
    
    const bloodBanks = await BloodBank.find({
      'bloodInventory.bloodType': bloodType,
      'bloodInventory.quantity': { $gt: 0 },
      isOpen: true
    });
    
    res.status(200).json({ 
      success: true, 
      count: bloodBanks.length, 
      data: bloodBanks.map(bank => ({
        id: bank._id,
        name: bank.name,
        location: bank.location,
        contactNumber: bank.contactNumber,
        quantity: bank.bloodInventory.find(item => item.bloodType === bloodType).quantity,
        lastUpdated: bank.bloodInventory.find(item => item.bloodType === bloodType).lastUpdated
      }))
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};