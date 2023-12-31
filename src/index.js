import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/navbar/navbar.css';
import './main.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/cart',
    element: <Cart/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);