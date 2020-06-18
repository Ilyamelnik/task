import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../redux/actions/projectsActions';
import SectionContent from './SectionContent';
import Header from './header/Header';

 class MainProjects extends React.Component {
     
    onChangeInput = (event) => {
        this.props.setSearch(event.target.value);
    }
   
    render() {
        return (
            <React.Fragment>
                <Header onChangeInput={this.onChangeInput} />
                <div className="container-middle">
                    <div className="middle">
                        <h1>Main Projects</h1>
                        <p>From configuration to security, web apps to big data – whatever the infrastructure needs of your application may be, there is a <strong>Spring Project</strong> to help you build it. Start small and use just what you need – <strong>Spring is modular by design.</strong></p>
                        <SectionContent  />
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {};


const mapDispatchToProsp = {
    setSearch,
}

export default connect(
    mapStateToProps,
    mapDispatchToProsp,
)(MainProjects);

