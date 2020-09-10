import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';

import { makeStyles } from '@material-ui/core';

import TodoCard from './todoCard';

const useStyles = makeStyles(theme => ({

    listContainer: {
        padding: theme.spacing(4),
    }
}))

const TodoList = () => {

    const { todos, getTodos } = useContext(GlobalContext);

    const classes =  useStyles(); 

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className={classes.listContainer}>
            { todos.length ? todos.map(todo => (
                <TodoCard key={todo._id} todo={todo}/>
            )) : (
                <p>No tasks in sight!</p>
            )}
        </div>
    )
}

export default TodoList;