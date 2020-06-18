import React from 'react';
export default class NavbarlinkSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPointed: false,
            isSearch: true
        }
    }
    mouseOver = () => {
        this.setState({ isPointed: true });
    }
    mouseOut = () => {
        this.setState({ isPointed: false });
    }
    
    handleChange = () => {
        if (this.state.isSearch) {
            this.setState({ isSearch: false })
        }
        else {
            this.setState({ isSearch: true })
        }
    }

    render() {
        let style;
        if (this.state.isPointed) {
            style = { background: 'rgb(109, 179, 63)' };
        }
        else {
            style = { background: '' };
        }
        return (
            <li className="navbar-link search-navbar" onClick={() => {this.props.dropChange(); this.handleChange()}} style={style} onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()}>
                <a className="a-navbar-search">
                    <i className={this.state.isSearch ? "fas fa-search head-search" : "fas fa-times head-close"}>
                    </i>
                </a>
            </li>
        )
    }
}
