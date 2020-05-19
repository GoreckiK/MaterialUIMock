import React from 'react';
import { useDrop } from "react-dnd";
import { ItemType } from '../constants';

export default function Drop() {
    const [collectedProps, drop] = useDrop({
        accept: ItemType.CELL
    })

    return (
        <div ref={drop} style={{width: "80%", height: "400px", border: '1px solid black', marginTop: "50px"}}>
            Drop Target
        </div>
    )
}