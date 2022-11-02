import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

const defaultState = {
  statement1: 0,
};

const reducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'INCREMENT_STATE':
      return { ...state, statement1: state.statement1 + action.payload };

    case 'DECREMENT_STATE':
      return { ...state, statement1: state.statement1 - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
