// src/server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Add the '.js' extension here
import Project from './models/project.js'; // Add .js extension

dotenv.config(); // Load environment variables from .env file

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// POST route to create a new project
app.post('/create-project', async (req, res) => {
  const { project, timeline } = req.body;

  try {
    // Validate input
    if (!project || !timeline) {
      return res.status(400).json({ message: 'Both project and timeline are required.' });
    }

    // Create a new project
    const newProject = new Project({ project, timeline });

    // Save the project to MongoDB
    await newProject.save();

    return res.status(200).json({
      message: 'Project saved successfully!',
      data: newProject,
    });
  } catch (err) {
    console.error('Error saving project:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
