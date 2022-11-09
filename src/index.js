import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import RateContextProvider from './contexts/rateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RateContextProvider>
    <App />
  </RateContextProvider>
);