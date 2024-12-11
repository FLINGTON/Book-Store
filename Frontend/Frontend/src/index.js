import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: you can add your own styles
import App from './app.js'; // This imports your App component
import reportWebVitals from './reportWebVitals.js';

// Log results (for example: console.log, or send to an analytics endpoint)
reportWebVitals();


// This is the entry point for your React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure there is a 'root' div in your public/index.html
);

// Optional: For performance monitoring
reportWebVitals();






