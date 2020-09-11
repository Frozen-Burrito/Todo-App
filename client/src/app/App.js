import React from 'react';
import './App.css';

import { GlobalProvider } from '../context/globalContext';

import ThemeContainer from '../theme/themeContainer';

function App() {

  return (
    <GlobalProvider>
      <ThemeContainer />
    </GlobalProvider>
  );
}

export default App;
