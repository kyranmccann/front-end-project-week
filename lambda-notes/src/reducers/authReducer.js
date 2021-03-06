
import {
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../actions';

const initialAuthState = {
  user: null,
  loggedIn: false,
  authorizing: false,
  error: null,
}



export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        authorizing: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        authorizing: false,
        loggedIn: true,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        authorizing: false,
        error: action.payload,
      };

    case LOGIN:
    return {
      ...state,
      authorizing: true,
    }

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        authorizing: false,
        loggedIn: true,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        authorizing: false,
        error: action.payload,
      }

    default:
    return state;
  }
}
