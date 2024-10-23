const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Assuming the route file is named api.js
const dbConfig = require('./config/db'); // Assuming your MongoDB config is in config/db.js

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port or default to 5000

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API Routes
app.use('/api', apiRoutes); // Prefix your routes with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
