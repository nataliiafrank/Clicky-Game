import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Clicky Game!</h1>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </div>
        )
    }
}

export default Header;