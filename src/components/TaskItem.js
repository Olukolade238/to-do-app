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

    return(
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
            </li>
        </div>
    );
}

export default TaskItem;