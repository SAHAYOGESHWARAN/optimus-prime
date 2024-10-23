import React from 'react';
import axios from '../utils/api';

const Dashboard = () => {
    const activateSecurity = async () => {
        try {
            const response = await axios.post('/api/activate-security');
            alert(response.data);
        } catch (error) {
            console.error('Error activating security:', error);
        }
    };

    return (
        <div>
            <h1>Home System Dashboard</h1>
            <button onClick={activateSecurity}>Activate Home Security</button>
        </div>
    );
};

export default Dashboard;
