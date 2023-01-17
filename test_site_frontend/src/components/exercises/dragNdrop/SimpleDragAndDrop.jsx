import React from "react";
import DraggableElement from "../../dragndrop/DraggableElement";
import { MOVE } from "../../dragndrop/DropEffect";
import DropTarget from "../../dragndrop/DropTarget";

export default function SimpleDragAndDropExercise(props) {
    function handleItemDropped(event, element) {
        event.target.appendChild(element);
    }

    return (
        <article className="exercise">
            <header className="exercise-header">
                <h2 className="exercise-title">Exercise 1) Drag and drop the text into the bucket</h2>
            </header>
            <div className="exercise-candidate">
                <DraggableElement id="para-drop-1" dropEffect={MOVE} selector="#para-drop-1" link="dnd-ex-1" style={{ height: "50px" }}>
                    <p>Drag and drop me into the square below!</p>
                </DraggableElement>
                <DropTarget
                    id="drop-t1"
                    dropEffect={MOVE}
                    onItemDropped={handleItemDropped}
                    link="dnd-ex-1"
                    style={{
                        width: "100%",
                        height: "200px",
                        border: "solid 1px black"
                    }}
                >
                </DropTarget>
            </div>
            <section className="exercise-task">
                <h3>Task: Drag and drop the text</h3>
                <p>
                    For this task, you must use Selenium to drag and drop the text into the square 
                    shaped <code>div</code> element. Ensure you verify that the element is moved inside of the square 
                    drop target in your Selenium test using an assertion.
                </p>
            </section>
        </article>
    );
}