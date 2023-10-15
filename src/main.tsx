import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(getRoot()).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function getRoot(): HTMLElement {
  const element =  document.getElementById('root');

  if (element === null) {
    throw new Error('Root element not found');
  }

  return element;
}