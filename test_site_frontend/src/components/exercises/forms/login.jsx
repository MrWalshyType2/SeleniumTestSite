import React from "react";
import { useState } from "react";

export default function LoginFormExercise(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrectLogin, setIncorrectLogin] = useState(false);
    const [renderLogoutMessage, setRenderLogoutMessage] = useState(false);

    function handleLoginSubmit(event) {
        event.preventDefault();

        if (username === "admin" && password === "password") {
            setLoggedIn(true);
            setIncorrectLogin(false);
        } else setIncorrectLogin(true);
        setPassword("");
    }

    function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false);
        setRenderLogoutMessage(true);
        setTimeout(() => {
            setRenderLogoutMessage(false);
        }, 10000); // 10 seconds
    }

    const handleUsernameChange = event => setUsername(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    return (
        <article className="exercise">
            <header className="exercise-header">
                <h2>{props.prefix}Login form</h2>
                <p className="exercise-lead">
                    This form will simulate logging into a service. After entering the supplied details 
                    into the form, it will pretend it has logged you into a service and display a welcome message.
                </p>
            </header>
            <div className="exercise-candidate">
                {!loggedIn && <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" id="username" onChange={handleUsernameChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={handlePasswordChange} required />
                    </div>
                    <button type="submit">Login</button>
                </form>}
                <div>
                    {loggedIn && <div id="welcome-message">
                        <h3>Welcome back to your portal admin!</h3>
                        <button onClick={handleLogout}>Logout</button>
                    </div>}
                    {isIncorrectLogin && <div id="error-message">
                        <p>Incorrect login details, please try again!</p>
                    </div>}
                    {renderLogoutMessage && <div id="logout-message">
                        <p>Logged out successfully!</p>    
                    </div>}
                </div>
            </div>
            
            {/* tasks */}
            <section className="exercise-task">
                <h3>Task 1</h3>
                <p>
                    Your task is to use Selenium to validate that the correct messages appear
                    for correct and incorrect login details. The username is "admin" and the password 
                    is "password", any other details are invalid.
                </p>
                <p>
                    The messages to check for include:
                </p>
                <ul>
                    <li><strong>Successful login:</strong> Welcome back to your portal admin!</li>
                    <li><strong>Failed login:</strong> Incorrect login details, please try again!</li>
                </ul>
            </section>
            <section className="exercise-task">
                <h3>Task 2</h3>
                <p>
                    Use Selenium to validate that the logout functionality is working correctly. After logging out, 
                    the following message will be temporarily displayed for 10 seconds:
                </p>
                <ul>
                    <li>Logged out successfully!</li>
                </ul>
                <p>
                    Verify the message does appear and then disappear after 10 seconds.
                </p>
            </section>
        </article>
    );
}