import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <li className="nav-link"><NavLink to="/Maininfo">Main</NavLink></li>
                        <li className="nav-link"><NavLink to="/Mymap">Make your own map</NavLink></li>
                        <li className="nav-link"><NavLink to="/Contact">Contact me</NavLink></li>
                        <li className="nav-link"><NavLink to="/Network">Share your route</NavLink></li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
