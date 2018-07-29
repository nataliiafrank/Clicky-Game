import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="/" className="logo">Simpsons Clicky Game</a></li>
                    <li className="nav-list-item status">{this.props.status}</li>
                    <li className="nav-list-item">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;