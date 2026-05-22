import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck, FaUndo, FaTrash, FaEdit } from "@fortawesome/free-solid-svg-icons";

function TaskItem() {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    function saveEdit() {
        if(editText.trim()) {
            
        }
    }

    return(
        <>

        </>
    );
}

export default TaskItem;