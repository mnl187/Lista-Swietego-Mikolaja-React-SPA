import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <Routes>
            <Route path="/gifts" element={<MainView/>}/>
            <Route path="/test" element={<MainView/>}/>
        </Routes>
    );
}
