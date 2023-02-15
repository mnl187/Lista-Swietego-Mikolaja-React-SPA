import React, {useEffect, useState} from "react";
import {GiftsTable} from "./GiftsTable";
import {GiftEntity} from 'types';

export const GiftsList = () => {

    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const refreshGifts = async () => {
        setGiftsList(null);
        const res = await fetch('http://localhost:3001/gift');
        const data = await res.json();
        console.log(data);
        setGiftsList(data.GiftsList);

    };

    useEffect(() => {
        refreshGifts();
    },[]);

    if (giftsList === null) {
        return <p>Loading....</p>
    }

    return <>
    <h1>Gifts</h1>
        <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>
    </>;
}