import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';

import TodoCard from './todoCard';

const TodoList = () => {

    const { todos, getTodos } = useContext(GlobalContext);

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="todo-list">
            { todos.length ? todos.map(todo => (
                <TodoCard key={todo._id} todo={todo}/>
            )) : (
                <p>No tasks in sight!</p>
            )}
        </div>
    )
}

export default TodoList;