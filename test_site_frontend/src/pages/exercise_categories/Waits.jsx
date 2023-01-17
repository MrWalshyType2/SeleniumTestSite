import React from "react";
import { useState, useEffect } from "react";

export default function Waits() {

    const [exerciseOneElement, setExerciseOneElement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let currentLoadTime;
        function randomWait(msMin, msMax, cb) {
            if (msMin > msMax) throw Error("Minimum time to wait must not be greater than maximum time to wait.");
            const ms = Math.round(Math.random() * (msMax - msMin) + msMin);
            currentLoadTime = ms;
            setTimeout(cb, ms);
        }

        randomWait(3000, 10000, () => {
            setIsLoading(false);
            setExerciseOneElement(
                <>
                    <h1 role="presentation" id="wait-target-1">Exercise one loaded</h1>
                    <p>Loaded in: <span style={{ color: "gray" }}>{currentLoadTime}</span>ms</p>
                </>
            );
        });
    }, []);

    return (
        <>
            <header>
                <h1>Waiting exercises</h1>
                <p>Practice your skills at waiting for elements with Selenium.</p>
            </header>
            <main>
                <article className="exercise">
                    <header className="exercise-header">
                        <h2 className="exercise-title">Exercise 1) Waiting for elements to load</h2>
                    </header>
                    <div className="exercise-candidate">
                        {isLoading && <div id="ex1-loader" className="loader ml-auto mr-auto"></div>}
                        {exerciseOneElement && exerciseOneElement}
                    </div>
                    <section className="exercise-task">
                        <h3>Task 1: Verify the element loads within 10 seconds (10000ms)</h3>
                        <p>
                            Use Selenium to verify that the elements load in within 10 seconds. There are two 
                            elements to check for. A <code>h1</code> element with an id of <code>wait-target-1</code> and an 
                            adjacent <code>p</code> element.
                        </p>
                        <p>
                            You must use an explicit wait for this task.
                        </p>
                    </section>
                    <section className="exercise-task">
                        <h3>Task 2: Verify the spinning loader appears and disappears within 10 seconds (10000ms)</h3>
                        <p>
                            Use Selenium to verify that the spinning loader element appears when the page opens, and 
                            disappears within 10 seconds. You should also verify that the loader is replaced with the 
                            expected content.
                        </p>
                        <p>
                            The loader is a <code>div</code> with an id of <code>ex1-loader</code>. You should also take two 
                            screenshots of the page, one demonstrating a visible loader and one demonstrating the loaded content. Save 
                            the screenshots to your filesystem.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}