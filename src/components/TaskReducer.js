import { createSeedTasks, formatDate } from '../data/seedTasks';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text.trim(),
          done: false,
          priority: action.priority || 'medium',
          category: action.category || 'Personal',
          date: formatDate(),
        },
      ];
    case 'DELETE':
      // Keep every task except the one with the matching id.
      return tasks.filter(task => task.id !== action.id);
    case 'COMPLETE':
      // Flip the done value (true→false or false→true)
      return tasks.map(task =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    case 'UPDATE':
      // Change the text and refresh the date, keeping the same position
      return tasks.map(task =>
        task.id === action.id
          ? { ...task, text: action.text.trim(), date: formatDate() }
          : task
      );
    case 'CLEAR_COMPLETED':
      return tasks.filter(task => !task.done);
    case 'RESET':
      return createSeedTasks();
    default:
      return tasks;
  }
}

export default tasksReducer;