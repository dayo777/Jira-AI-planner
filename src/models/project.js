// src/models/project.js

import mongoose from 'mongoose';

// Define the Project schema
const projectSchema = new mongoose.Schema({
  project: { type: String, required: true },
  timeline: { type: String, required: true },
});

// Create the Project model from the schema
const Project = mongoose.model('Project', projectSchema);

export default Project;
