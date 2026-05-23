import { useReducer, useEffect } from 'react';
import TaskForm from "./components/TaskForm";
import TaskItem from './components/TaskItem';
import TasksReducer from './components/TaskReducer';

function App() {
  // Load saved tasks from localStorage (or use empty array if none exist)
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  const [tasks, dispatch] = useReducer(TasksReducer, savedTasks);

  // Every time tasks changes, save them to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <div className="sidebar">
        <h2>TaskFlow</h2>
        <p>Total: {tasks.length}</p>
        <p>Remaining: {tasks.filter(t => !t.done).length}</p>
      </div>
      <div className="main">
        <h1>My Tasks</h1>
        <TaskForm dispatch={dispatch} />
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} dispatch={dispatch} />
          ))}
        </ul>
        {tasks.length === 0 && <p className="empty">No tasks yet!</p>}
      </div>
    </div>
  ); 
}

export default App;