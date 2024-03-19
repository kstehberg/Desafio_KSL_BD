// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App.jsx is in the src folder
import 'bootstrap/dist/css/bootstrap.min.css'; // If you're using Bootstrap via npm

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);