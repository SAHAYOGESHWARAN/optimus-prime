const express = require('express');
const { activateSecurity, handleVoiceCommand, chatbot } = require('../controllers/aiController');
const router = express.Router();

router.post('/activate-security', activateSecurity);
router.post('/voice-command', handleVoiceCommand);
router.post('/chatbot', chatbot);  // New chatbot route

module.exports = router;
