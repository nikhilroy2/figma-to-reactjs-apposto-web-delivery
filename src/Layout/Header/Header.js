import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header>
            <a href="#" id="logo">
                <img src={require('./logo.png')} alt="img" />
            </a>
        </header>
    );
}

export default Header;