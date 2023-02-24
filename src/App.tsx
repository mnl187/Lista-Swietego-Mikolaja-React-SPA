import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Link, Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <>
            <h1>Santa App</h1>
            Menu <Link to="/gift">Gift</Link> | <Link to="/test">Gift</Link>
        <Routes>
            <Route path="/gift" element={<GiftsView/>}/>
            <Route path="/test" element={<GiftsView/>}/>
        </Routes>
        </>
    );
}
