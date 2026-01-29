const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Node.js! This app is containerized with Docker.');
});

// Start the server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});