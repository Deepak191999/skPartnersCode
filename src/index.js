import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 800



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

