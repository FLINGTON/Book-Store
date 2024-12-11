// index.js
const express = require('express');
 // Ensure the path is correct
const app = express();
// Middleware
app.use(express.json());
// Connect to the database

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT ||4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
