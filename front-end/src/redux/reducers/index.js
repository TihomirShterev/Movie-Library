import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './userReducers';
import { searchByTitleReducer } from './movieReducers';

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  searchByTitle: searchByTitleReducer
});

export default reducers;
