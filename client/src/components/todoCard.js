import React, { useState } from 'react';

const TodoCard = ({ todo }) => {

    const [ check, setCheck ] = useState(todo.complete);

    const checkTask = () => {
        setCheck(!check)
    } 

    return (
        <div className="card" onClick={checkTask}>
            <p className={check ? 'text-strike' : null}>
                {todo.text}
            </p>
        </div>
    )
}

export default TodoCard;