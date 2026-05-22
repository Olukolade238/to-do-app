import { useReducer, useEffect } from 'react';
import TaskForm from "./components/TaskForm";
import TaskItem from './components/TaskItem';

function tasksReducer(tasks, action) {
  switch(action.type) {
    case 'ADD':
      return [...tasks, {
        id: Date.now(),  
        text: action.text,
        done: false,
        date: new Date().toLocaleString()
      }];
  }
}

function App() {
  return (
    <>
      <TaskForm />
    </>
  );
}

export default App;
