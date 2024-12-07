import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import KanbanColumn from './KanbanColumn';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  // Handle form submission, simulating a backend request
  const handleProjectSubmit = (projectData) => {
    // Simulate a backend response
    const aiResponse = [
      {
        number: 1,
        title: 'Create Requirement Specification Document.',
        description: 'Define the project scope and requirements.',
        priority: 'High',
        status: 'ToDo',
        subtasks: ['Gather requirements', 'Define features', 'Review with stakeholders'],
      },
      {
        number: 2,
        title: 'Design User Flow Diagrams.',
        description: 'Create user flow diagrams.',
        priority: 'Medium',
        status: 'ToDo',
        subtasks: ['Map user journeys', 'Create process flows', 'Review feedback'],
      },
    ];

    setTasks(aiResponse);
    setTodo(aiResponse);
  };

  // Move tasks between columns
  const moveTask = (task) => {
    if (task.status === 'ToDo') {
      task.status = 'In Progress';
      setInProgress([...inProgress, task]);
      setTodo(todo.filter((t) => t.number !== task.number));
    } else if (task.status === 'In Progress') {
      task.status = 'Done';
      setDone([...done, task]);
      setInProgress(inProgress.filter((t) => t.number !== task.number));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeader}>Project Management Kanban</h1>
      <ProjectForm onSubmit={handleProjectSubmit} />
      <div style={styles.kanbanBoard}>
        <KanbanColumn title="To Do" tasks={todo} onMoveTask={moveTask} />
        <KanbanColumn title="In Progress" tasks={inProgress} onMoveTask={moveTask} />
        <KanbanColumn title="Done" tasks={done} onMoveTask={moveTask} />
      </div>
    </div>
  );
};

// Inline CSS for the entire app
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  mainHeader: {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: '2em',
  },
  kanbanBoard: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
};

export default App;
