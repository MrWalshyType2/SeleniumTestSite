import React from "react";
import { useState } from "react";
import GoogleSearchExercise from "../../components/exercises/forms/google";
import LoginFormExercise from "../../components/exercises/forms/login";

export default function Forms() {
    return (
        <>
            <header>
                <h1>Practice forms</h1>
                <p>Practice your usage of forms with Selenium...</p>
            </header>
            <main>
                <GoogleSearchExercise prefix="Exercise 1) " />
                <LoginFormExercise prefix="Exercise 2) " />
            </main>
        </>
    )
}