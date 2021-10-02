import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './userReducers';
import { searchByTitleReducer, searchByIdReducer, favoritesReducer } from './movieReducers';

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  searchByTitle: searchByTitleReducer,
  searchById: searchByIdReducer,
  favorites: favoritesReducer
});

export default reducers;
