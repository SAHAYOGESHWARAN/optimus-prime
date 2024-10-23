import React, { useState } from 'react';
import axios from '../utils/api';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        try {
            const response = await axios.post('/api/chatbot', { message });
            const botResponse = response.data.response;
            setChatHistory([...chatHistory, { user: message, bot: botResponse }]);
            setMessage('');  // Clear input after sending
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatbot">
            <h2>Optimus AI Chatbot</h2>
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {chat.user}</p>
                        <p><strong>Bot:</strong> {chat.bot}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
  

