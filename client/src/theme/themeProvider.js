import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

import { 
  ThemeProvider, 
  Paper, 
  Container, 
  Switch, 
  FormControlLabel, 
  makeStyles 
} from '@material-ui/core';
import { defaultTheme } from '../theme/themes';

import AppHeader from '../components/appHeader';
import AddTodoForm from '../components/addTodoForm';
import TodoList from '../components/todoList';

const useStyles = makeStyles(theme => ({
  appMain: {
    backgroundColor: theme.palette.background.default,
  }
}))

const ThemeParent = () => {

  const { config, getConfig, updateConfig } = useContext(GlobalContext);

  const [darkTheme, setDarkTheme] = useState(false);
  const classes = useStyles();

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeProvider theme={defaultTheme(darkTheme)}>
      <div className={classes.appMain}>
        <Paper>
          <Container maxWidth="sm">

            <AppHeader />
            <FormControlLabel
              control={
                <Switch 
                  color="primary"
                  checked={darkTheme}
                  onChange={switchTheme}
                />
              }
              label="Dark"
            />

            <AddTodoForm />
            <TodoList />

          </Container>
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export default ThemeParent;