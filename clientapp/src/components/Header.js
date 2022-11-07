import React from 'react';
import '../components/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'

import {
    NavLink
} from "react-router-dom";


const element = <FontAwesomeIcon icon={faShip} />

function Header() {
    return (

        <div className="header-container">

            <div className="header-announce-container header-announce ">
                <span className="header-logo">{element}</span>
                <div className="header-announce">
                    WATERBOAT
            </div>
            </div>

            <nav className="header-nav-container">
                <div className="header-nav-links-container">
                <NavLink className="header-nav-links" activeClassName="selected" to="/">
                HOME
                </NavLink>
                <NavLink className="header-nav-links" activeClassName="selected" to="/booknow">
                BOOK NOW
                </NavLink>
                <NavLink className="header-nav-links" activeClassName="selected" to="/bookinglist">
                BOOKING LIST
                </NavLink>
                </div>
            </nav>

        </div>
    );
}

export default Header;
