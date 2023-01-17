import React from "react";
import DraggableElement from "../../dragndrop/DraggableElement";
import { MOVE } from "../../dragndrop/DropEffect";
import DropTarget from "../../dragndrop/DropTarget";

export default function CardColumnsExercise(props) {
    return (
        <article className="exercise">
            <header className="exercise-header">
                <h2>Exercise 2) Drag and drop the cards between the columns</h2>
            </header>
            <div className="exercise-candidate" style={{ display: "flex", justifyContent: "space-between" }}>
                <Column title="Todo">
                    <Card id="dnd-t1" selector="#dnd-t1">
                        <p style={{ margin: "0" }}>Do the laundry</p>
                    </Card>
                    <Card id="dnd-t2" selector="#dnd-t2">
                        <p style={{ margin: "0" }}>Walk the dog</p>
                    </Card>
                </Column>
                <Column title="Doing">
                    <Card id="dnd-t3" selector="#dnd-t3">
                        <p style={{ margin: "0" }}>Plan weekly party</p>
                    </Card>
                </Column>
                <Column title="Done"></Column>
            </div>
            <section className="exercise-task">
                <h3>Task 1: From Todo to Doing</h3>
                <p>
                    Create a Selenium test which verifies that a card can be moved 
                    from the 'Todo' column to the 'Doing' column. You will need to verify 
                    at least two different things, one of them being that the card does 
                    actually appear in the DOM in the column it was dropped in.
                </p>
            </section>
            <section className="exercise-task">
                <h3>Task 2: From Doing to Done</h3>
                <p>
                    Create a Selenium test which verifies that the 'Plan weekly party' card 
                    in the 'Doing' column can be moved to the 'Done' column. As before, there are 
                    at least two things you should assert in your test.
                </p>
            </section>
        </article>
    );
}

function Column(props) {

    function handleItemDropped(event, element) {
        event.target.appendChild(element);
    }

    return (
        <div
            style={{
                height: "400px",
                border: "solid 1px black",
                flexBasis: "30%",
                padding: "16px",
                display: "flex",
                flexDirection: "column"
            }}
            id={props.title}
        >
            <h3 style={{ textAlign: "center" }}>{props.title}</h3>
            <DropTarget
                dropEffect={MOVE}
                onItemDropped={handleItemDropped}
                link="dnd-ex-2"
                style={{ height: "100%" }}
            >
                {props.children}
            </DropTarget>
        </div>
    );
}

function Card(props) {
    return (
        <DraggableElement 
            id={props.id} 
            className={props.className}
            dropEffect={MOVE} 
            selector={props.selector} 
            link="dnd-ex-2"
            style={{
                backgroundColor: "rgb(72, 72, 73)",
                color: "whitesmoke",
                padding: "16px 24px",
                marginBottom: "16px",
                borderRadius: "8px"
            }}
        >
            {props.children}
        </DraggableElement>
    );
}