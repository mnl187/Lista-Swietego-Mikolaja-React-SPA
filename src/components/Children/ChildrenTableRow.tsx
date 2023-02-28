import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {Link} from "react-router-dom";
import {ChildGiftSelect} from "../ChildGiftSelect";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
    return (
        <tr>
            <th>
                {props.child.name}
            </th>
            <td>
                <ChildGiftSelect
                    giftsList={props.giftsList}
                    selectedId={props.child.giftId}
                />
            </td>
        </tr>
    )
}