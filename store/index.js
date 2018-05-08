// @flow

// Redux Store Configuration
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState: Object) => {
  const middleware = applyMiddleware(thunk);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
