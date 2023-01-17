import React from "react";
import { Link } from 'react-router-dom';

function NavigationLink({ to, value, toggled }) {

    return (
        // change class name based on whether the navigation menu containing the link is toggled open or not
        <li className="nav-link">
            <Link to={to}>
                {value}
            </Link>
        </li>
    )
}

export default NavigationLink;