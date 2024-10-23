exports.activateSecurity = (req, res) => {
    // AI Logic to activate home security
    res.status(200).send('Home security activated.');
};

exports.handleVoiceCommand = (req, res) => {
    const command = req.body.command;
    // AI logic for processing voice command
    res.status(200).send(`Executing command: ${command}`);
};
