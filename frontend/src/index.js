import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // Optional: If you have global styles

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Get the chatbot response element
const chatbotResponse = document.getElementById('chatbot-response');

// Get the user input element
const userInput = document.getElementById('user-input');

// Get the send button element
const sendButton = document.getElementById('send-button');

// Add an event listener to the send button
sendButton.addEventListener('click', () => {
    // Get the user's input
    const userMessage = userInput.value;

    // Clear the user's input
    userInput.value = '';

    // Display the user's message
    chatbotResponse.innerText = `You : ${userMessage}`;

    // Simulate a chatbot response
    const chatbotMessage = `JARVIS: ${userMessage} is a great question!`;
    chatbotResponse.innerText += `\n${chatbotMessage}`;
});