import React from "react";

export default function DraggableElement(props) {

    // Sets the data that is used in the drop target to identify what was dropped
    const startDragging = event => {
        event.dataTransfer.setData("selector", props.selector);
        event.dataTransfer.setData("link", props.link);
        event.dataTransfer.setData(props.link, "");
        event.dataTransfer.effectAllowed = props.dropEffect;

        // setTimeout(() => event.target.style.display = "none", 0);
    }

    // Whether dropped in viable drop target or not, make the element 
    // visible again
    const onDragEnd = event => {
        // event.target.style.display = "block";
    }

    return (
        <div 
            draggable 
            id={props.id}
            className={props.className}
            onDragStart={startDragging}
            onDragEnd={onDragEnd}
            style={props.style}
        >
            {props.children}
        </div>
    );
}