import { useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaTimes, FaRegClock } from 'react-icons/fa';

function TaskItem({ task, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const priority = task.priority || 'medium';
  const category = task.category || 'Personal';

  function saveEdit() {
    if (editText.trim()) {
      dispatch({ type: 'UPDATE', id: task.id, text: editText });
    }
    setEditing(false);
  }

  function cancelEdit() {
    setEditText(task.text);
    setEditing(false);
  }

  return (
    <li className={`task-item priority-${priority} ${task.done ? 'done' : ''}`}>
      <button
        className="check"
        role="checkbox"
        aria-checked={task.done}
        aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}
        title={task.done ? 'Mark incomplete' : 'Mark complete'}
        onClick={() => dispatch({ type: 'COMPLETE', id: task.id })}
      >
        {task.done && <FaCheck aria-hidden="true" />}
      </button>

      {editing ? (
        <input
          className="edit-input"
          value={editText}
          autoFocus
          aria-label="Edit task"
          onChange={e => setEditText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') cancelEdit();
          }}
        />
      ) : (
        <div className="task-body">
          <span className="task-text">{task.text}</span>
          <div className="task-meta">
            <span className={`badge badge-${category.toLowerCase()}`}>{category}</span>
            <span className={`badge badge-priority-${priority}`}>{priority}</span>
            <span className="task-date">
              <FaRegClock aria-hidden="true" /> {task.date}
            </span>
          </div>
        </div>
      )}

      <div className="task-actions">
        {editing ? (
          <>
            <button className="act-save" onClick={saveEdit} title="Save" aria-label="Save">
              <FaCheck />
            </button>
            <button onClick={cancelEdit} title="Cancel" aria-label="Cancel">
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setEditText(task.text);
                setEditing(true);
              }}
              title="Edit"
              aria-label="Edit task"
            >
              <FaEdit />
            </button>
            <button
              className="act-delete"
              onClick={() => dispatch({ type: 'DELETE', id: task.id })}
              title="Delete"
              aria-label="Delete task"
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;