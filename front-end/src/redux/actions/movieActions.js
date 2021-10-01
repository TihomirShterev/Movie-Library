import axios from 'axios';
import { apiKey, detailsPath, searchPath, tmdbURL } from '../../config/config';
import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE, SEARCH_BY_ID } = ActionTypes;

export const searchByTitle = title => async dispatch => {
  try {
    const res = await axios.get(`${tmdbURL}${searchPath}?api_key=${apiKey}&query=${title}`);
    const { data: { results } } = await res;
    dispatch({ type: SEARCH_BY_TITLE, payload: results });
  } catch (err) {
    console.log(err);
  }
};

export const searchById = id => async dispatch => {
  try {
    const res = await axios.get(`${tmdbURL}${detailsPath}/${id}?api_key=${apiKey}`);
    const { data } = await res;
    dispatch({ type: SEARCH_BY_ID, payload: data });
  } catch (err) {
    console.log(err);
  }
};
