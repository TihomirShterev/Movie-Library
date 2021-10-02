import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE, SEARCH_BY_ID, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, LIST_FAVORITES } = ActionTypes;

export const searchByTitleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_BY_TITLE:
      return [...payload];
    default:
      return state;
  }
};

export const searchByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SEARCH_BY_ID:
      return payload;
    default:
      return state;
  }
};

export const favoritesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_FAVORITES:
      return [...state, payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(f => f.id !== payload);
    case LIST_FAVORITES:
      return [...payload.reverse()];
    default:
      return state;
  }
};
