import { useReducer } from 'react';

function tasksReducer(tasks, action) {
  switch(action.type) {
    case 'ADD':
      return [...tasks, {
        id: Date.now(),  
        text: action.text,
        done: false,
        date: new Date().toLocaleString()
      }];
    case 'DELETE':
      // This Keep every task except the one with the matching id.
      return tasks.filter(task => task.id !== action.id);   
    case 'COMPLETE':
      // Flip the done value (true→false or false→true)
      return tasks.map(task =>
        task.id === action.id
          ? { ...task, done: !task.done }
          : task
      );   
    case 'UPDATE':
      // This changes the text and update the date, while keeping same position
      return tasks.map(task =>
        task.id === action.id
          ? { ...task, text: action.text, date: new Date().toLocaleString() }
          : task
      );
    default:
      return tasks;
  }
}