import { SET_AUTH } from '../actions/authActions';

const defaultState = {
    isAuthorized: false,
};

const auth = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:{
        return { ...state, isAuthorized: payload };
    }
      
    default:
      return state;
  }
};

export default auth;