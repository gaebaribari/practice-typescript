import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import AppTheme from './AppTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <AppTheme />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
