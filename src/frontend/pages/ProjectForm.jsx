import React, { useState } from 'react';

const ProjectForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('');

  // Handle input changes
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTimelineChange = (e) => setTimeline(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      project: description,
      timeline: timeline,
    };
    onSubmit(projectData); // Pass data to parent component
    setDescription('');
    setTimeline('');
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.header}>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="description" style={styles.label}>Project Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            style={styles.textarea}
            placeholder="Enter project description here"
            rows="4"
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="timeline" style={styles.label}>Timeline (in weeks)</label>
          <input
            type="number"
            id="timeline"
            value={timeline}
            onChange={handleTimelineChange}
            style={styles.input}
            placeholder="Enter timeline in weeks"
            min="1"
          />
        </div>
        <button type="submit" style={styles.button}>Add Project</button>
      </form>
    </div>
  );
};

// Inline CSS styles for the form
const styles = {
  formContainer: {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    resize: 'vertical',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProjectForm;
