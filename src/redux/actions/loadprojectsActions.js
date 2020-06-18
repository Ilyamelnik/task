export const LOAD_PROJECTS = "LOAD_PROJECTS";

export const loadProjects = res => dispatch => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3002/projects', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
         const body = JSON.parse(xhr.response)
           dispatch({
            type: LOAD_PROJECTS,
            payload: body
          });
        };
    };
  };