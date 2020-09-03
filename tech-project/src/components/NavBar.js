import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Phones from "./Phones";
import Televisions from "./Televisions";
import Computers from "./Computers";
import Home from "./Home";

function NavBar() {
    return (
    <Router>
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/phones">Phones</Link>
            </li>
            <li>
                <Link to="/televisions">Televisions</Link>
            </li>
            <li>
                <Link to="/computers">Computers</Link>
            </li>
            </ul>
        </nav>

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
        </Switch>
        </div>
    </Router>
    );
}

export default NavBar;