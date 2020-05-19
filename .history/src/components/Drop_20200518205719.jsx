import React from 'react';
import { useDrop } from "react-dnd";
import { ItemType } from '../constants';

export default function Drop() {
    const [collectedProps, drop] = useDrop({
        accept: ItemType.CELL
    })

    return (
        <div ref={drop}>
            Drop Target
        </div>
    )
}