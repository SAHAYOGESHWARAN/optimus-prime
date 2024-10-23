const express = require('express');
const { activateSecurity, handleVoiceCommand } = require('../controllers/aiController');
const router = express.Router();

// Route to activate home security
router.post('/activate-security', activateSecurity);

// Route to handle voice commands
router.post('/voice-command', handleVoiceCommand);

module.exports = router;
