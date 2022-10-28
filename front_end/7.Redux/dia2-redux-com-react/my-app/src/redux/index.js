// Essa é o Store
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/countReducer';

// const INITIAL_STATE = { count: 0 }; // 2. Criou um reducer com o INITIAL_STATE (const de baixo é o reducer)
// const reducer = (state = INITIAL_STATE, action) => state;

const store = createStore(counterReducer, composeWithDevTools()); // 1. Criou a store

export default store;
