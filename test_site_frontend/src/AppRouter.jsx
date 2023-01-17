import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Exercises from "./pages/Exercises";
import Forms from "./pages/exercise_categories/Forms";
import Tables from "./pages/exercise_categories/Tables";
import DragAndDrop from "./pages/exercise_categories/DragAndDrop";
import Waits from "./pages/exercise_categories/Waits";

function AppRouter() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    {/* unprotected subroutes of '/' for component <App /> */}
                    <Route index element={<Home />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/exercises/forms" element={<Forms />} />
                    <Route path="/exercises/tables" element={<Tables />} />
                    <Route path="/exercises/dragdrop" element={<DragAndDrop />} />
                    <Route path="/exercises/waits" element={<Waits />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;