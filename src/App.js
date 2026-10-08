import { useReducer, useEffect, useState } from 'react';
import { FaTasks, FaListUl, FaRegCircle, FaCheckCircle, FaBroom, FaUndo } from 'react-icons/fa';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TasksReducer from './components/TaskReducer';
import { createSeedTasks } from './data/seedTasks';

// Load saved tasks from localStorage. First-ever visit (no key yet) gets demo data;
// after that, an empty list stays empty.
function loadTasks() {
  try {
    const raw = localStorage.getItem('tasks');
    if (raw === null) return createSeedTasks();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const FILTERS = [
  { key: 'all', label: 'All tasks', icon: <FaListUl /> },
  { key: 'active', label: 'Active', icon: <FaRegCircle /> },
  { key: 'completed', label: 'Completed', icon: <FaCheckCircle /> },
];

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

function App() {
  const [tasks, dispatch] = useReducer(TasksReducer, undefined, loadTasks);
  const [filter, setFilter] = useState('all');

  // Every time tasks change, save them to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const total = tasks.length;
  const completed = tasks.filter(t => t.done).length;
  const remaining = total - completed;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const counts = { all: total, active: remaining, completed };
  const visible = tasks.filter(t =>
    filter === 'all' ? true : filter === 'active' ? !t.done : t.done
  );

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon"><FaTasks /></span>
          <h2>TaskFlow</h2>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>{total}</strong>
            <span>Total</span>
          </div>
          <div className="stat">
            <strong>{remaining}</strong>
            <span>Remaining</span>
          </div>
          <div className="stat">
            <strong>{completed}</strong>
            <span>Done</span>
          </div>
        </div>

        <div className="progress" aria-label={`${percent}% complete`}>
          <div className="progress-head">
            <span>Progress</span>
            <span>{percent}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <nav className="filters" aria-label="Filter tasks">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter ${filter === f.key ? 'active' : ''}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              <span className="filter-icon">{f.icon}</span>
              <span className="filter-label">{f.label}</span>
              <span className="filter-count">{counts[f.key]}</span>
            </button>
          ))}
        </nav>

        <button className="reset-btn" onClick={() => dispatch({ type: 'RESET' })}>
          <FaUndo aria-hidden="true" /> Reset demo data
        </button>
      </aside>

      <main className="main">
        <div className="container">
          <header className="page-header">
            <p className="eyebrow">{today}</p>
            <h1>{greeting()}, here are your tasks</h1>
          </header>

          <TaskForm dispatch={dispatch} />

          <div className="list-toolbar">
            <span>
              {visible.length} {visible.length === 1 ? 'task' : 'tasks'}
            </span>
            {completed > 0 && (
              <button
                className="link-btn"
                onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
              >
                <FaBroom aria-hidden="true" /> Clear completed
              </button>
            )}
          </div>

          <ul className="task-list">
            {visible.map(task => (
              <TaskItem key={task.id} task={task} dispatch={dispatch} />
            ))}
          </ul>

          {visible.length === 0 && (
            <div className="empty">
              <p className="empty-title">
                {total === 0 ? 'No tasks yet!' : 'Nothing here'}
              </p>
              <p>
                {total === 0
                  ? 'Add your first task above to get started.'
                  : 'No tasks match this filter.'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;