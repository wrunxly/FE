import { legacy_createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk), 
  // composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
