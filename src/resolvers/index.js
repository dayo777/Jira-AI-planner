// src/resolvers/index.js

import Resolver from '@forge/resolver';
import mongoose from 'mongoose';
import Project from '../models/project'; // Import the Project model

// Create an instance of the resolver
const resolver = new Resolver();

// MongoDB connection URL (store securely in an environment variable)
const mongoURI = process.env.MONGO_URI;  // Set this in your environment variables for security

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define the resolver to create a project
resolver.define('createProject', async (req) => {
  const { project, timeline } = req.payload;

  try {
    // Validate input
    if (!project || !timeline) {
      return {
        status: 400,
        message: 'Both project description and timeline are required.',
      };
    }

    // Create a new project document
    const newProject = new Project({
      project,
      timeline,
    });

    // Save the project to MongoDB
    await newProject.save();

    return {
      status: 200,
      message: 'Project saved successfully!',
      data: newProject,
    };
  } catch (err) {
    console.error('Error saving project:', err);
    return {
      status: 500,
      message: 'Internal Server Error while saving the project.',
    };
  }
});

// Export the resolver
export const handler = resolver.getDefinitions();
