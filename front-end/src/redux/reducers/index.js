import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './userReducers';

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer
});

export default reducers;
