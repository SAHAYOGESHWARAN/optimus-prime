const { processMessage } = require('../services/nlpService');

exports.activateSecurity = (req, res) => {
    // AI Logic to activate home security
    res.status(200).send('Home security activated.');
};

exports.handleVoiceCommand = (req, res) => {
    const command = req.body.command; // Assuming the command is sent in the request body
    // AI logic for processing voice command
    res.status(200).send(`Executing command: ${command}`);
};

// New chatbot API endpoint
exports.chatbot = async (req, res) => {
    const { message } = req.body; // Assuming user input is sent in the request body
    try {
        const botResponse = await processMessage(message); // Process the message using your NLP service
        res.status(200).json({ response: botResponse });
    } catch (error) {
        console.error('Error processing chatbot message:', error); // Log the error for debugging
        res.status(500).send('Error processing chatbot message.');
    }
};
