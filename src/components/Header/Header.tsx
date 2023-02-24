import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <h1>Santa App</h1>
            Menu <Link to="/gift">Gift</Link> | <Link to="/test">Gift</Link>
            <hr/>
        </>
    )
}