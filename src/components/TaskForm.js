import { useState } from 'react';

function TaskForm( {dispatch} ) {
    const[text, setText] = useState('');

    function submit(e) {
        e.preventDefault();
        if(!text.trim()) {
            return;
        }
        dispatch({type: 'ADD', text});
        setText('');
    }

    return(
        <>
            <form onSubmit={submit} className='task-form'>
                <input 
                    type={text}
                    onChange={e => setText(e.target.type)}
                    placeholder='Add a New Task...'
                />
                <button type='Submit'>Add</button>
            </form>
        </>
    )
}

export default TaskForm;