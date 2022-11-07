import React from 'react';
import '../components/Footer.css';

let date = new Date();
let copy= "\u00A9"

function Footer() {
    return (
        <div className="footer-cont">

            <div className="footer-container">
                <span className="footer-mark">
                  {copy} WATERBOAT  {date.getFullYear()}

                </span>

                <ul className="footer-list">
                    <li>
                        <a className="footer-links footer-link-info" href="/"> More Info</a>
                    </li>
                    <li>
                        <a className="footer-links footer-link-about" href="/"> About us</a>
                    </li>
                    <li>
                        <a className="footer-links footer-link-contact" href="/"> Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
