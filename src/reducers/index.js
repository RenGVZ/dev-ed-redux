import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
  counter: counterReducer,
  loggedIn: loggedReducer
});

export default allReducers