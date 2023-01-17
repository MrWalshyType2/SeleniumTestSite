import React from "react";
import { Link } from "react-router-dom";

export default function Exercises() {

    const categories = [
        {
            name: "Forms",
            link: "/exercises/forms"
        },
        {
            name: "Tables",
            link: "/exercises/tables"
        },
        {
            name: "Drag and drop",
            link: "/exercises/dragdrop"
        },
        {
            name: "Waits",
            link: "/exercises/waits"
        }
    ];

    return (
        <>
            <header>
                <h1>Exercise page</h1>
                <p>
                    Each category links to an exercises page with Selenium 
                    tasks for the relevant category.
                </p>
            </header>
            <main className="container">
                <h3>Categories</h3>
                <div className="row">
                    {categories.map(category => (<div key={category.name} className="link-card col-3 col-md-6 col-sm-12">
                        <Link to={category.link}>
                            {category.name}
                        </Link>
                    </div>))}
                </div>
            </main>
        </>
    )
}