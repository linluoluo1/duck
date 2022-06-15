import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
       <nav role="navigation">
                <div id="dropdownMenu">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="navMenu">
                        <li className="nav-link"><a href="/">Home</a></li>
                        <li className="nav-link"><a href="/">Make your own map</a></li>
                        <li className="nav-link"><a href="/">Contact me</a></li>
                        <li className="nav-link"><a href="/">Share your route</a></li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
