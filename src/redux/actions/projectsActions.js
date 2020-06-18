export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = value => dispatch => {
  dispatch({
    type: SET_SEARCH,
    payload: value
  });
};