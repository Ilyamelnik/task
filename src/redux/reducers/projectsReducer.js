import { SET_SEARCH } from '../actions/projectsActions';
import { LOAD_PROJECTS } from '../actions/loadprojectsActions';

const defaultState = {
    value: '',
    allProjects: [],
    projects: [],
};

const search = (state = defaultState, { type, payload }) => {
    switch (type) {
        case SET_SEARCH: {
            return setSearchAndUpdateProducts(state, payload);
        }
        case LOAD_PROJECTS: {
            return loadProjects(state, payload);
        }
        default:
            return state;
    }
};

const setSearchAndUpdateProducts = (state, searchValue) => {
    const projects = state.allProjects.filter(project =>
        project.title.toLowerCase().includes(searchValue.toLowerCase()));
    return { ...state, value: searchValue, projects };
}
const loadProjects = (state, payload) => {
    return { ...state, allProjects: payload}
}

export default search;