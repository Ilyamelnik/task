import React from 'react';
import Navbarlink from './Navbarlink'
import NavbarlinkSearch from './NavbarlinkSearch'
import SearchDrop from './SearchDrop'
import NavbarLinkNavigation from './NavbarLinkNavigation'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth,
            dropIsInvisible: true,
        }
    }
    
    dropChange = () => {
        if (this.state.dropIsInvisible) {
            this.setState({ dropIsInvisible: false })
        }
        else {
            this.setState({ dropIsInvisible: true })
        }
    }
    handleResize = () => {
        if (this.state.width < 1000 && window.innerWidth > 1000) {
            this.setState({ width: window.innerWidth });
            this.setState({ dropIsInvisible: true });
        }
        else if (this.state.width > 1000 && window.innerWidth < 1000) {
            this.setState({ width: window.innerWidth });
            this.setState({ dropIsInvisible: true });
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        if (this.state.width > 1000) {
            return (<React.Fragment>
                <div className='desktop-header'>
                    <div className="container-header">
                        <div className="spring-logo-div">
                            <a className='spring-logo' href=''>
                                <span id='spring-logo-span'>
                                </span>
                            </a>
                        </div>
                        <ul className="navbar">
                            <Navbarlink name='Projects' />
                            <Navbarlink name='Guides' />
                            <Navbarlink name='Blog' />
                            <Navbarlink name='Training & Certification' />
                            <NavbarlinkSearch dropChange={this.dropChange} />
                        </ul>
                    </div>
                </div>
                <SearchDrop onChangeInput={this.props.onChangeInput} dropIsInvisible={this.state.dropIsInvisible} />
            </React.Fragment>
            )
        }
        else {
            return (
                <div className='mobile-header'>
                    <div className={this.state.dropIsInvisible ? 'navigation-drawer-container-closed' : 'navigation-drawer-container-open'}>
                        <div className='mobile-search'>
                            <form>
                                <input className='mob-input' placeholder='Search...' onChange={this.props.onChangeInput} />
                            </form>
                        </div>
                        <div className='navigation-item-list'>
                            <NavbarLinkNavigation name='Home' />
                            <NavbarLinkNavigation name='Projects' />
                            <NavbarLinkNavigation name='Guides' />
                            <NavbarLinkNavigation name='Blog' />
                            <NavbarLinkNavigation name='Training & Certification' />
                        </div>
                    </div>
                    <div className={this.state.dropIsInvisible ? 'mobile-header-1' : 'mobile-header-2'}>
                        <div className='open-nav-draw' onClick={this.dropChange}>
                            <span className='nav-sidebar'>
                            </span>
                        </div>
                        <div className='logo-spring-mob'>
                            <div className='mob-icon-spring'></div>
                        </div>
                    </div>
                </div>)
        }
    }
}

