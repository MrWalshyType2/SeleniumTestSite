import React from "react";

export default function GoogleSearchExercise(props) {
    return (
        <article className="exercise">
            <header className="exercise-header">
                <h2 className="exercise-title">{props.prefix}Google search form</h2>
                <p className="exercise-lead">
                    This form will take the given input and search for it 
                    using Google search.
                </p>
            </header>
            <div className="exercise-candidate">
                <form action="https://www.bing.com/search" method="get">
                    <div className="form-group">
                        <label htmlFor="q">Query: </label>
                        <input type="search" name="q" id="query" placeholder="Search for..." required />
                    </div>
                    <div className="btn-form-group" style={{ textAlign: "right" }}>
                        <button type="reset">Clear</button>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            <section className="exercise-task">
                <h3>Task 1</h3>
                <p>
                    Create a Selenium test that verifies the search functionality works. Things 
                    to check for in your assertions could include:
                </p>
                <ul>
                    <li>The pages title</li>
                    <li>The content in the Google search bar after pressing Submit</li>
                </ul>
            </section>
            <section className="exercise-task">
                <h3>Task 2</h3>
                <p>
                    Create a Selenium test that verifies the clear search content functionality works. Things 
                    to check for in your assertions could include:
                </p>
                <ul>
                    <li>The search bar having no input value present</li>
                </ul>
            </section>
            <section className="exercise-task">
                <h3>Task 3</h3>
                <p>
                    Create a Selenium test that verifies the HTML5 form validation works, in this case that a 
                    search value is required.
                </p>
            </section>
        </article>
    );
}