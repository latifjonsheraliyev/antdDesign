
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/home/index';  

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
