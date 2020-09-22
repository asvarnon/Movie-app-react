import React from 'react';
import {Link} from 'react-router-dom'
//~~~JS components below
import Clock from './Clock'

function Nav () {
    const navStyle = {
        color: "white"
    }

    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
            <Clock />
        </nav>
    );

}
export default Nav;


