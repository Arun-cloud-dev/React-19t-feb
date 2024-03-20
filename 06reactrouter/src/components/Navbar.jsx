import React from "react";

import { Link , BrowserRouter as Router, Routes , Switch} from 'react-router-dom'


function NavBar() {
    return(

        <Router>
            <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>

            <Switch>
                <Routes path="./about.jsx">
                    <about></about>
                </Routes>
            </Switch>
        </Router>
    );
}

export default NavBar;


