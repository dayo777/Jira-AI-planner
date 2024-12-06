import React from 'react';

const KanbanColumn = ({ title, tasks, onMoveTask }) => {
  return (
    <div style={styles.column}>
      <h3 style={styles.columnTitle}>{title}</h3>
      <div style={styles.cardContainer}>
        {tasks.map((task) => (
          <div key={task.number} style={styles.card}>
            <h4 style={styles.cardTitle}>{task.title}</h4>
            <p style={styles.cardDescription}>{task.description}</p>
            <div style={styles.subtaskList}>
              {task.subtasks.map((subtask, index) => (
                <p key={index} style={styles.subtask}>{subtask}</p>
              ))}
            </div>
            <button onClick={() => onMoveTask(task)} style={styles.moveButton}>
              Move to Next Stage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS styles for the Kanban columns
const styles = {
  column: {
    width: '300px',
    margin: '20px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
  },
  columnTitle: {
    textAlign: 'center',
    color: '#333',
  },
  cardContainer: {
    marginTop: '10px',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#555',
  },
  subtaskList: {
    marginTop: '10px',
    fontSize: '14px',
  },
  subtask: {
    marginBottom: '5px',
    color: '#777',
  },
  moveButton: {
    marginTop: '10px',
    padding: '8px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default KanbanColumn;
