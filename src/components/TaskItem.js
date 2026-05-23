import { useState } from 'react';
import { FaCheckCircle, FaUndo, FaTrash, FaEdit } from 'react-icons/fa';

function TaskItem({ task, dispatch }) {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    function saveEdit() {
        if (editText.trim()) {
            dispatch({ type: 'UPDATE', id: task.id, text: editText });
        }
        setEditing(false);
    }

    return (
        <li className={`task-item ${task.done ? 'done' : ''}`}>
            <span className={`dot ${task.done ? 'green' : 'gray'}`} />
            {editing ? (
                <input
                    className='edit-input'
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveEdit()}
                />
            ) : (
                <div className='task-body'>
                    <span className='task-text'>{task.text}</span>
                    <p className='task-date'>{task.date}</p>
                </div>
            )}
            <div className='task-actions'>
                <button
                    onClick={() => dispatch({ type: 'COMPLETE', id: task.id })}
                    title={task.done ? 'Mark incomplete' : 'Mark complete'}
                >
                    {task.done ? <FaUndo /> : <FaCheckCircle />}
                </button>
                <button
                    onClick={() => {
                        setEditing(true);
                        setEditText(task.text);
                    }}
                    title="Edit"
                >
                    <FaEdit />
                </button>
                <button
                    onClick={() => dispatch({ type: 'DELETE', id: task.id })}
                    title="Delete"
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
}

export default TaskItem;