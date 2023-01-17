import React from "react";
import CardColumnsExercise from "../../components/exercises/dragNdrop/CardColumns";
import SimpleDragAndDropExercise from "../../components/exercises/dragNdrop/SimpleDragAndDrop";

export default function DragAndDrop() {
    return (
        <>
            <header>
                <h1>Drag and drop exercises</h1>
                <p>Practice your abilities at dragging and dropping elements with Selenium.</p>
            </header>
            <main>
                <SimpleDragAndDropExercise />
                <CardColumnsExercise />
            </main>
        </>
    )
}