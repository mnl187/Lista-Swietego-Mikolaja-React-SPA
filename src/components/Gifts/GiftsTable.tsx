import React from "react";
import {GiftEntity} from "types";
import {GiftTableRow} from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Count</th>
        </tr>
        </thead>
        <tbody>
        {
            props.gifts.map(gift => (
                <GiftTableRow gift={gift} key={gift.id}/>
            ))
        }
        </tbody>
    </table>
)