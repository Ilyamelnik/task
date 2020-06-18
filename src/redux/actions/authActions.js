export const SET_AUTH = 'SET_AUTH';

export const setAuth = credentials => dispatch => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", 'http://localhost:3001/users', true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(credentials));

  xhr.onreadystatechange = () => {
    if (xhr.status === 200) {
      const isAuthorized = xhr.response;
      
        dispatch({
          type: SET_AUTH,
          payload: isAuthorized
        })
    }
}
};