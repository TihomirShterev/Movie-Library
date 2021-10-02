import axios from 'axios';
import { tmdbURL, searchPath, apiKey, detailsPath, appURL } from '../../config/config';
import ActionTypes from '../constants/actionTypes';

const { SEARCH_BY_TITLE, SEARCH_BY_ID, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, LIST_FAVORITES } = ActionTypes;

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

export const addToFavorites = (userId, movie) => async dispatch => {
  try {
    const { data: { favorite } } = await axios.put(
      `${appURL}/favorites/add/:favoriteId`,
      { userId, movie });
    dispatch({ type: ADD_TO_FAVORITES, payload: favorite })
  } catch (err) {
    console.log(err);
  }
};

export const removeFromFavorites = (userId, favoriteId) => async dispatch => {
  try {
    const { data } = await axios.put(
      `${appURL}/favorites/remove/:favoriteId`,
      { userId, favoriteId });
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const listFavorites = userId => async dispatch => {
  try {
    const { data: { favorites } } = await axios(
      `${appURL}/favorites/${userId}`);
    dispatch({ type: LIST_FAVORITES, payload: favorites })
  } catch (err) {
    console.log(err);
  }
};
