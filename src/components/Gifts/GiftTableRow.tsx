import React from "react";
import {GiftEntity} from "types";
import {Link} from "react-router-dom";

interface Props {
    gift: GiftEntity;
    onGiftsChange: () => void;
}

export const GiftTableRow = (props: Props) => {
    const deleteGift = async (e: MouseEvent) => {
    e.preventDefault()

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
            method: 'DELETE'
        });

        if (res.status === 400 || res.status === 500) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`);
            return;
        }

        props.onGiftsChange()
    };

    return (
        <tr>
            <td>
            <Link to={`/gift/${props.gift.id}`}>{props.gift.id}</Link>
            </td>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    )
}