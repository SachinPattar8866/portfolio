import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ✅ Bootstrap & Font Awesome imports (if not in App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
