import React from "react";
import {AddChild} from "src/components/AddChild/AddChild";
import {ChildrenList} from "../components/Children/ChildrenList";


export const ChildView = () => (
    <>
        <ChildrenList/>
        <AddChild/>
    </>
)