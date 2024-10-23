import React, { useState } from 'react';
import axios from '../utils/api';

const VoiceCommand = () => {
    const [command, setCommand] = useState('');

    const handleVoiceInput = async () => {
        try {
            const response = await axios.post('/api/voice-command', { command });
            alert(response.data);
        } catch (error) {
            console.error('Error processing voice command:', error);
        }
    };

    const handleGoogleVoiceInput = () => {
        // Google Web Speech API logic to capture voice input
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();

        recognition.onresult = function(event) {
            setCommand(event.results[0][0].transcript);
            handleVoiceInput();
        };
    };

    return (
        <div>
            <h2>Voice Command Assistant</h2>
            <button onClick={handleGoogleVoiceInput}>Start Voice Command</button>
            <p>Command: {command}</p>
        </div>
    );
};

export default VoiceCommand;
