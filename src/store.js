// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};

const enhancers = compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

//Creates Store
const store = createStore(rootReducer, initialState, enhancers);

//Can be called later to create store
export function configureStore(initialState: Object = {}) {
  return createStore(rootReducer, initialState, enhancers);
}

export default store;
