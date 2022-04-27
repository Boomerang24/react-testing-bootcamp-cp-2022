import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// if (process.env.NODE_ENV === 'development') {
if (process.env.REACT_APP_MSW) {
  const { worker } = require('./mocks/browser');
  worker.start({ onUnhandledRequest: 'bypass' }); // Resolves/ByPasses unhandled requests in browser console
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
