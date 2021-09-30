import axios from 'axios';
import { apiKey, searchURL } from '../../config/config';
import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE: SEARCH_MOVIE } = ActionTypes;

export const searchByTitle = movieTitle => async dispatch => {
  try {
    const res = await axios.get(`${searchURL}?api_key=${apiKey}&query=${movieTitle}`);
    const { data: { results } } = await res;
    dispatch({ type: SEARCH_MOVIE, payload: results });
  } catch (err) {
    console.log(err);
  }
};
