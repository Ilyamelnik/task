import React from 'react';
export default class Navbarlink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPointed: false,
        }
    }
    mouseOver = () => {
        this.setState({ isPointed: true });
    }
    mouseOut = () => {
        this.setState({ isPointed: false });
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
            <li className="navbar-link" style={style} onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()} >
                <a className='a-navbar' href=''>
                    {this.props.name}
                </a>
            </li>
        )
    }
}

