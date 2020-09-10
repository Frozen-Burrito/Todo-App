import React from 'react';
import './App.css';

import { GlobalProvider } from '../context/globalContext';

import ThemeParent from '../theme/themeProvider';

function App() {

  return (
    <GlobalProvider>
      <ThemeParent />
    </GlobalProvider>
  );
}

export default App;
