import React from "react";
import {GiftEntity} from "types";
import {ChilldrenTableRow} from "./ChilldrenTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

export const ChilldrenTable = (props: Props) => (
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
            props.gifts.map(gift => (
                <ChilldrenTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange}/>
            ))
        }
        </tbody>
    </table>
)