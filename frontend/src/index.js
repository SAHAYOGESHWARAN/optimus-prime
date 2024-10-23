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
