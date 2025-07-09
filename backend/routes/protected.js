const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// Example protected route
router.get('/dashboard', auth, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.email}!`, user: req.user });
});

module.exports = router;