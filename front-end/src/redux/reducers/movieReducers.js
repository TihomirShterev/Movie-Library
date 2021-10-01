import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE, SEARCH_BY_ID } = ActionTypes;

export const searchByTitleReducer = (state = {}, { type, payload }) => {
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
