import React from "react";
import {GiftEntity} from "types";

interface Props {
    gift: GiftEntity;
}

export const GiftTableRow = (props: Props) => {
    const deleteGift = async (e: MouseEvent) => {
    e.preventDefault()

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) {
            return
        }

        await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
            method: 'DELETE'
        })
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