import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const TodoCard = ({ todo }) => {

    const [ check, setCheck ] = useState(todo.complete);
    const { updateTodo, deleteTodo } = useContext(GlobalContext);

    const checkTask = () => {
        setCheck(!check);
        todo.complete = !check;
        updateTodo(todo, check);
    } 

    const deleteTask = () => {
        deleteTodo(todo._id);
    }

    return (
        <div className="card" onClick={checkTask}>
            <p className={check ? 'text-strike' : null}>
                {todo.text}
            </p>

            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}

export default TodoCard;