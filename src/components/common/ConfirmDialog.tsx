import React from "react";
import {Dialog} from "./Dialog";


interface Props {
    children: React.ReactNode;
    title?: string;
}

export const ConfirmDialog = (props: Props) => (
    <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button>
        <button>No</button>
    </Dialog>
)