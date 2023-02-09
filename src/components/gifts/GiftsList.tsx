import React, {useEffect, useState} from "react";
import {GiftEntity} from "../../types/gift";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/gift');
            const data = await res.json();
            console.log(data);
            setGiftsList(data.GiftEntity);

        })();
    },[]);

    if (giftsList === null) {
        return <p>Loading....</p>
    }

    return null;
}