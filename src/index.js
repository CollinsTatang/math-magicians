import React from 'react';
import createRoot from 'react-dom';
import App from './App';

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
