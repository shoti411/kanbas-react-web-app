import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import TestFunc from "./2023-10-23";
import { Provider } from "react-redux";

function Notes() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="2023-10-23" />} />
                <Route path="2023-10-23" element={<TestFunc />} />
            </Routes>
        </div>
    );
}

export default Notes;