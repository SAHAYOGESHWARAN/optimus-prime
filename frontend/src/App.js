import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import VoiceCommand from './components/VoiceCommand';
import Chatbot from './components/Chatbot';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Welcome to the Optimus Prime AI Assistant</h1>
            {data ? (
                <div>
                    <p>Energy Level: {data.energy}</p>
                    <p>CPU Usage: {data.cpu}</p>
                    <p>Memory Usage: {data.memory}</p>
                    <h2>News:</h2>
                    <ul>
                        {data.news.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>Weather: {data.weather}</p>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
            <Dashboard />
            <VoiceCommand />
            <Chatbot />
        </div>
    );
};

export default App;
