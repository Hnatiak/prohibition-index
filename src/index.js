import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowseRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowseRouter basename="/prohibition-index">
      <App />
    </BrowseRouter>
  </React.StrictMode>
);
