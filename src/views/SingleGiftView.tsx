import React, {useState} from "react";
import {GetSingleGiftRes} from 'types';

export const SingleGiftView = () => {
    const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);

    if (giftInfo === null) {
        return null;
    }

    return <>
        <h1>{giftInfo.gift.name}</h1>
        <p>This gift has ID <strong>{giftInfo.gift.id}</strong>. We had <strong>{giftInfo.gift.count}</strong> of this item and <strong>{giftInfo.gift.givenCount}</strong> were already given. </p>
    </>
}


