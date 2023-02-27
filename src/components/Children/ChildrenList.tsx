import React, {useEffect, useState} from "react";
import {ChilldrenTable} from "./ChilldrenTable";
import {GiftEntity} from 'types';
import {Spinner} from "../common/Spinner/Spinner";

export const ChildrenList = () => {

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
        return <Spinner/>
    }

    return <>
    <h1>Gifts</h1>
        <ChilldrenTable gifts={giftsList} onGiftsChange={refreshGifts}/>
    </>;
}