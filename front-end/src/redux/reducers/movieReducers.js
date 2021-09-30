import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE } = ActionTypes;

export const searchByTitleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SEARCH_BY_TITLE:
      return [...payload];
    default:
      return state;
  }
};
