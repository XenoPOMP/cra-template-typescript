import { combineReducers, createStore } from 'redux';
import { secondExampleReducer, exampleReducer } from './reducer-list';

const rootReducer = combineReducers({
  second: secondExampleReducer,
  first: exampleReducer,
});

export const store = createStore(rootReducer);
