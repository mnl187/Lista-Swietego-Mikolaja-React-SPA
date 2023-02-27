import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {Link} from "react-router-dom";

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
            <td>{props.child.gittId}</td>
        </tr>
    )
}