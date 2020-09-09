import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Phones from "./Phones";
import Televisions from "./Televisions";
import Computers from "./Computers";
import Home from "./Home";
import Cart from "./Cart";
import "./nav.css";

function NavBar() {
  return (
    <Router>
      <div className="nav__bar">
        <h1 className="header">Tech Junkies</h1>
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/home">Home</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/phones">Phones</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/televisions">Televisions</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/computers">Computers</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        </div>

        <Switch>
          <Route path="/home">
              <Home />
          </Route>
          <Route path="/phones">
            <Phones />
          </Route>
          <Route path="/televisions">
            <Televisions />
          </Route>
          <Route path="/computers">
            <Computers />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
    </Router>
  );
}

export default NavBar;
