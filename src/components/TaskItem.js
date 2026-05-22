import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck, FaUndo, FaTrash, FaEdit } from "@fortawesome/free-solid-svg-icons";

function TaskItem( {task, dispatch} ) {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    function saveEdit() {
        if(editText.trim()) {
            dispatch({ type: 'UPDATE', id: task.id, text: editText });
        }
        setEditing(false);
    }

    return (
        <div>
            <li className={`task-item ${task.done ? 'done' : ''}`}>
                <span className={`dot ${task.done ? 'green' : 'gray'}`} />
                {editing ? (
                    <input
                        className='edit-input'
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && saveEdit()}
                    />
                ): (
                    <div>
                        <span className='task-text'>{task.text}</span>
                        <p className='task-date'>{task.name}</p>
                    </div>
                )}
                <div>
                    <button 
                        onClick={() => dispatch({ type: 'COMPLETE', id: task.id })}
                        title={task.done ? 'Mark incomplete' : 'Mark complete'}
                    >
                        {task.done ? <FaUndo /> : <FaCheck />}
                    </button>
                    <button 
                        onClick={() => { setEditing(true); setEditText(task.text); }}
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
        </div>
    );
}

export default TaskItem;