import React, { useState } from "react";
import { isRouteErrorResponse, Link } from 'react-router-dom';
import NavigationLink from "./navlink";

function NavigationBar(props) {

    // state to track whether the nav bar is toggled or not, styling is in the App.css file
    // - false is a closed toggle menu, true is a open toggle menu
    const [toggled, setToggled] = useState(false);

    // use to toggle the menu state
    function toggleMenu(event) {
        setToggled(previousState => {
            return !previousState;
        });
    }

    function isOpen() {
        if (toggled) return "show";
        return "";
    }

    return (
            <nav>
                <button id="toggle" className="hamburger ml-auto" onClick={toggleMenu}><span></span><span></span><span></span></button>
                <ul className={"nav-bar " + isOpen()}>
                    <NavigationLink to="/" value="Home" />
                    <NavigationLink to="/exercises" value="Exercises" />
                </ul>
            </nav>
    )
}

export default NavigationBar;