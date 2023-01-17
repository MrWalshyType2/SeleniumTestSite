import React from "react";
import { NONE } from "./DropEffect";

export default function DropTarget(props) {

    // onDragOver and onDrop events required for dropping
    // - default drag behaviour disables dropping
    // - allow dropping by calling event.preventDefault()
    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = props.dropEffect;
        const index = event.dataTransfer.types.indexOf(props.link);
        if (index !== -1 && event.target.getAttribute("data-link") === event.dataTransfer.types[index]) {
            event.dataTransfer.dropEffect = props.dropEffect;
        } else event.dataTransfer.dropEffect = NONE;
    }
    
    // Triggered when element is dropped
    const drop = event => {
        event.preventDefault();
        const selector = event.dataTransfer.getData("selector");
        const link = event.dataTransfer.getData("link");
        if (link === props.link) {
            const droppedElement = document.querySelector(selector);
            console.log(droppedElement);
            if (droppedElement) props.onItemDropped(event, droppedElement);
        }
    }

    return (
        <div 
            id={props.id}
            className={props.className}
            style={props.style}
            onDragOver={dragOver} 
            onDrop={drop}
            data-link={props.link}
        >
            {props.children}
        </div>
    );
}