import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Link, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/gift" element={<GiftsView/>}/>
                <Route path="/gift/:idOfGift" element={<SingleGiftView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
        </>
    );
}
