exports.activateSecurity = (req, res) => {
    // AI Logic to activate home security
    res.status(200).send('Home security activated.');
};

exports.handleVoiceCommand = (req, res) => {
    const command = req.body.command;
    // AI logic for processing voice command
    res.status(200).send(`Executing command: ${command}`);
};
const { processMessage } = require('../services/nlpService');

exports.activateSecurity = (req, res) => {
    res.status(200).send('Home security activated.');
};

exports.handleVoiceCommand = (req, res) => {
    const command = req.body.command;
    res.status(200).send(`Executing command: ${command}`);
};

// New chatbot API endpoint
exports.chatbot = async (req, res) => {
    const { message } = req.body;
    try {
        const botResponse = await processMessage(message);
        res.status(200).json({ response: botResponse });
    } catch (error) {
        res.status(500).send('Error processing chatbot message.');
    }
};
