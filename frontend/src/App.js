import React from 'react';
// import './App.css'; // Optional: If you have styles for your App component
import Dashboard from './components/Dashboard';
import VoiceCommand from './components/VoiceCommand';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Optimus Prime AI Assistant</h1>
      <p>Your assistant is ready to help!</p>
      <Dashboard />
      <VoiceCommand />
      <Chatbot />
    </div>
  );
};

export default App;
