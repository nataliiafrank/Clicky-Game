import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list-item">Clicky Game</li>
                    <li className="nav-list-item">{this.props.status}</li>
                    <li className="nav-list-item">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;