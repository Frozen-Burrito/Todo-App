import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const AddTodoForm = () => {

    const [ text, setText ] = useState('');
    const { addTodo } = useContext(GlobalContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            text,
            complete: false,
        }
        
        addTodo(newTodo);
        setText('');
    }

    return (
        <form>
            <input type="text" value={ text } placeholder="I need to..." onChange={e => setText(e.target.value)} />

            <button className="btn-primary" onClick={ handleSubmit }>Add</button>
        </form>
    )
}

export default AddTodoForm;