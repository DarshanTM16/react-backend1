import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [navView, setnavView] = useState(false);

    let navHandle = () => {
        setnavView(!navView);
    }

    return(
        <>
         <nav className="navbar">
             <div className="upper">
                 <div className="title">
                     <span className="the">The</span>
                     <span className="siren">Siren</span>
                 </div>
             </div>

             <div className="lower">
                 <ul className="menu">
                     <li><NavLink to="/" className="link">Home</NavLink></li>
                     <li><NavLink to="/bollywood" className="link">Bollywood</NavLink> </li>
                     <li><NavLink to="/technology" className="link">Technology</NavLink> </li>
                     <li><NavLink to="/hollywood" className="link">Hollywood</NavLink> </li>
                     <li><NavLink to="/fitness" className="link">Fitness</NavLink> </li>
                     <li><NavLink to="/travel" className="link">Travel</NavLink> </li>
                 </ul>
             </div>
         </nav>

         
         <hr /><br />


         {/* FOR MOBILE VIEW */}

         <nav className="mobile-view">
                 <div className="m-title">
                     <span className="m-the">The</span>
                     <span className="m-siren">Siren</span>
                 </div>
                 <div className="hamIcon" onClick={navHandle}><i class="fa fa-bars"></i></div>

                 <div className={ navView ? "mobile-menu" : "mobile-menu-c" }>
                     <ul className="menu-link">
                      <li><NavLink to="/" className="link">Home</NavLink> </li>
                      <li><NavLink to="/bollywood" className="link">Bollywood</NavLink> </li>
                      <li><NavLink to="/technology" className="link">Technology</NavLink> </li>
                      <li><NavLink to="/hollywood" className="link">Hollywood</NavLink> </li>
                      <li><NavLink to="/fitness" className="link">Fitness</NavLink> </li>
                      <li><NavLink to="/travel" className="link">Travel</NavLink> </li>
                     </ul>
                 </div>
         </nav>
        </>
    )
}

export default Navbar;
