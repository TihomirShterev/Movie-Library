import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './userReducers';
import { searchByIdReducer, searchByTitleReducer } from './movieReducers';

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  searchByTitle: searchByTitleReducer,
  searchById: searchByIdReducer
});

export default reducers;
