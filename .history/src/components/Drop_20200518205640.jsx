import React from 'react';
import { useDrop } from "react-dnd";

export default function Drop() {
    const [collectedProps, drop] = useDrop({
        accept,
    })

    return (
        <div ref={drop}>
            Drop Target
        </div>
    )
}