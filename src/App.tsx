import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Link, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/gift" element={<GiftsView/>}/>
                <Route path="/test" element={<GiftsView/>}/>
            </Routes>
        </>
    );
}
