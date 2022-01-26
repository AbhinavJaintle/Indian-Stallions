import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Table'>Full List</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;