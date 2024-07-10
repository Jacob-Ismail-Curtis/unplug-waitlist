const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
const dbURI = 'mongodb+srv://jacobcurtis786:eoPLy9fD6SoqWnsU@unplug.xljlq5y.mongodb.net/waitlistDB?retryWrites=true&w=majority&appName=unplug'; // Replace with your actual MongoDB connection string
mongoose.connect(dbURI, {})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Schema and Model for Waitlist Entry
const waitlistEntrySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const WaitlistEntry = mongoose.model('WaitlistEntry', waitlistEntrySchema);

// Test Route
app.get('/test', (req, res) => {
  res.send('API is working');
});

// API endpoint to handle form submissions
app.post('/api/waitlist', (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newEntry = new WaitlistEntry({ firstName, lastName, email });

  newEntry.save()
    .then(() => res.status(201).json({ message: 'Waitlist entry added successfully' }))
    .catch((err) => {
      console.error('Error saving waitlist entry:', err);
      res.status(500).json({ error: err.message });
    });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
