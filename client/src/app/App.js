import React from 'react';
import './App.css';

import { GlobalProvider } from '../context/globalContext';

import TodoList from '../components/todoList';
import AddTodoForm from '../components/addTodoForm';

function App() {
  return (
    <GlobalProvider>
      <div className="app-main">
        <AddTodoForm />
        <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
