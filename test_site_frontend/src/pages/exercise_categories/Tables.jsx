import React from "react";
import EditableUserTableExercise from "../../components/exercises/tables/editable_user_table";

export default function Tables() {

    return (
        <>
            <header>
                <h1>Tables exercises</h1>
                <p>Practice using Selenium with tables...</p>
            </header>
            <main>
                <EditableUserTableExercise />
            </main>
        </>
    );
}