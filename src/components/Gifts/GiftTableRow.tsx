import React from "react";
import {GiftEntity} from "types";

interface Props {
    gift: GiftEntity;
}

export const GiftTableRow = (props: Props) => {
    const deleteGift = (e: MouseEvent) => {
    e.preventDefault()

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) {
            return
        }
    }
    return (
        <tr>
            <th>{props.gift.id}</th>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    )
}