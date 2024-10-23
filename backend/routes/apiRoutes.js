const express = require('express');
const router = express.Router();

// Sample data endpoint
router.get('/api/data', (req, res) => {
    // Return sample data
    res.json({
        energy: 80,
        cpu: 40,
        memory: 60,
        news: ['News Item 1', 'News Item 2', 'News Item 3'],
        weather: 'Sunny'
    });
});

// Import your controller functions
const { activateSecurity, handleVoiceCommand, chatbot } = require('../controllers/aiController');

// Define your other API routes
router.post('/activate-security', activateSecurity);
router.post('/voice-command', handleVoiceCommand);
router.post('/chatbot', chatbot);  // New chatbot route

module.exports = router;
