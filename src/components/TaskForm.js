import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export const CATEGORIES = ['Work', 'Study', 'Personal', 'Health'];
export const PRIORITIES = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

function TaskForm({ dispatch }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Work');

  function submit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD', text, priority, category });
    setText('');
  }

  return (
    <form onSubmit={submit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="New task"
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        aria-label="Category"
      >
        {CATEGORIES.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
        aria-label="Priority"
      >
        {PRIORITIES.map(p => (
          <option key={p.value} value={p.value}>{p.label}</option>
        ))}
      </select>
      <button type="submit">
        <FaPlus aria-hidden="true" /> Add
      </button>
    </form>
  );
}

export default TaskForm;