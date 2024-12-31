require('dotenv').config();
const mongoose = require('mongoose');
// const cors = require('cors');
const app = require('./app');

const port = process.env.PORT || 8000;

// Enable CORS
// app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });