import React from 'react';
import ContainerSection from './ContainerSection';
import { connect } from 'react-redux';
import { loadProjects } from '../redux/actions/loadprojectsActions'

class SectionContent extends React.Component {

    componentWillMount = () => {
         this.props.loadProjects()
    }

    renderContainerSection = () => {
        const {searchValue, allProjects, projects} = this.props;
        
        let projectsRender = allProjects;
        if(searchValue) {
            projectsRender = projects;
        }

        return projectsRender.map(item =>
            (<ContainerSection
                title={item.title}
                id={item.id}
                description={item.description}
            />)
        )
    };
    render() {
        return (
            <div className='section-content'>
                {this.renderContainerSection()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { projects, allProjects, value: searchValue } = state.projects;

    return {
        projects,
        allProjects,
        searchValue
    }
}

const mapDispatchToProps = {
    loadProjects,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SectionContent);