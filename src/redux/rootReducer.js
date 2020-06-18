import { combineReducers } from 'redux';
import auth from './reducers/authReducer';
import projects from './reducers/projectsReducer';

const rootReducer = combineReducers({
    auth,
    projects,
});

export default rootReducer;