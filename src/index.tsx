import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './assets/redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
