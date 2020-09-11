import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(2),
  }
}))

const AddTodoForm = () => {

  const [ text, setText ] = useState('');
  const [description, setDescription] = useState('');
  const { addTodo } = useContext(GlobalContext);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = {
      text,
      description,
      complete: false,
    }
    
    addTodo(newTodo);
    setText('');
    setDescription('');
  }

  return (
    <form>
      <TextField 
        id="standard-basic" 
        label="New Todo"
        placeholder="Walk the dog"
        fullWidth
        value={ text }
        onChange={e => setText(e.target.value)}
      />

      <TextField 
        id="outlined-basic" 
        className={classes.margin} 
        label="More about this task"
        placeholder="Remeber that he likes to go to the park."
        fullWidth
        variant="outlined"
        value={ description }
        onChange={e => setDescription(e.target.value)}
      />

      <Button 
        variant="contained" 
        size="medium" 
        color="secondary" 
        className={classes.margin} 
        onClick={ handleSubmit }
      >
        Add
      </Button>
    </form>
  )
}

export default AddTodoForm;