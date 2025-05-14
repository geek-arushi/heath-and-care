const express = require('express');
const router = express.Router();
// Import controllers here
// const { getTeamMembers, getTeamMember, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');

// Define routes
// router.route('/').get(getTeamMembers).post(createTeamMember);
// router.route('/:id').get(getTeamMember).put(updateTeamMember).delete(deleteTeamMember);

// Temporary route for testing
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: [] });
});

module.exports = router;