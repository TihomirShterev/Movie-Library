import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} = ActionTypes;

export const register = (email, password) => async dispatch => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:3001/api/users/register',
      { email, password },
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: data });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        err.response?.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:3001/api/users/login',
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        err.response?.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({ type: LOGOUT });
};
