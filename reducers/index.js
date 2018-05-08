// @flow
import { combineReducers } from 'redux';
import dateCreationReducer from './date-creation-reducer';

// Root Reducer
const rootReducer = combineReducers({
  weather: dateCreationReducer,
});

export default rootReducer;
