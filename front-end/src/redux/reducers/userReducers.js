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

export const registerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case LOGIN_FAIL:
      return { loading: false, error: payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
