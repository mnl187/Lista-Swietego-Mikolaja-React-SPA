import React, {useState} from "react";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState(null);


    if (giftsList === null) {
        return <p>Loading....</p>
    }
}