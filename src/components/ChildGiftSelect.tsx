import React, {useState} from "react";
import { GiftEntity } from "types";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

interface Props {
    giftsList: GiftEntity[];
    selectedId:  string;
}

export const ChildGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);

return <select value={selected} onChange={e => setSelected(e.target.value)}>
    {
        props.giftsList.map(gift => (
            <option key={gift.id} value={gift.id}>{gift.name}</option>
            )
        )
    }

</select>
}