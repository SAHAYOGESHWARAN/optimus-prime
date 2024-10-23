import React from 'react';
import Dashboard from './components/Dashboard';
import VoiceCommand from './components/VoiceCommand';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <VoiceCommand />
      <Chatbot />
    </div>
  );
}

export default App;
