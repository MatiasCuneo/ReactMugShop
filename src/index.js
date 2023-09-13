import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/navbar/navbar.css';
import './main.css';
import App from './App';
import NavBar from './components/navbar/navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);