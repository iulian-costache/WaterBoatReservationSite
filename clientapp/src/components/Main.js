import React from 'react';
import '../components/Main.css';

import {
    NavLink
} from "react-router-dom";


function Main() {
    return (

        <div className="main-container " >
            <div className="maintext-container ">

                <div className="maintext-title">
                    Book a Yacht!
                </div>

                <div className="maintext-subtitle">
                    Book your dream vacation!
                </div>

                <div >
                    <NavLink className="main-text-link-container maintext-link" activeClassName="selected" to="/booknow">
                        BOOK NOW
                </NavLink>
                </div>
            </div>
        </div>

    );
}

export default Main;
