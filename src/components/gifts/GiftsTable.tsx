import React from "react";
import {GiftEntity} from "../../types/gift";

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
            props.gifts.map()
        }
        </tbody>
    </table>
)