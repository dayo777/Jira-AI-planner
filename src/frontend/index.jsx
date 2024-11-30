// front-end code goes here
import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTimelineChange = (e) => {
    setTimeline(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project Description: ${description}\nTimeline: ${timeline} weeks`);
  };


  return (
    <>
      <Label labelFor="message">Description of your project</Label>
      <TextArea id="message" />
      <HelperMessage>Enter a message</HelperMessage>
      <Text>Hello world!</Text>
      <Text>{data ? data : 'Loading...'}</Text>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h2>Project Details</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              rows="5"
              value={description}
              onChange={handleDescriptionChange}
              style={{ width: '100%', padding: '10px', fontSize: '14px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="timeline">Timeline (in weeks)</label>
            <select
              id="timeline"
              value={timeline}
              onChange={handleTimelineChange}
              style={{ width: '100%', padding: '10px', fontSize: '14px' }}
            >
              <option value="">Select Timeline</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => (
                <option key={week} value={week}>
                  {week} week{week > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
            Submit
          </button>
        </form>
      </div>

    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
