const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/my-database', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a route for your API
app.get('/api/data', (req, res) => {
  // Retrieve data from database and send it to the client
  res.json({ message: 'Hello from server!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Require the Data model
const Data = require('./models/Data');

// Retrieve data from database
Data.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });