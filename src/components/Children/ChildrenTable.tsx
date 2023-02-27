import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {ChildrenTableRow} from "./ChildrenTableRow";

interface Props {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Count</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            props.childrenList.map(child => (
                <ChildrenTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange}/>
            ))
        }
        </tbody>
    </table>
)