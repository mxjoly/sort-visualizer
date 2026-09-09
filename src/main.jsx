import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// The service worker is generated and registered by vite-plugin-pwa.

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
