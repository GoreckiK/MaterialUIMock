import React from 'react';
import {useDrag} from "react-dnd";
import {ItemType} from "../constants";

const HeaderCell = (props) => {

    const [, drag] = useDrag({
        item: {
            type: ItemType.CELL,
            id: props.col
        }
    });

    const handleClick = () => {
        props.setOrderBy(props.col);
        props.setOrder(props.order === 'asc'? 'desc' : 'asc')
    };

    return (
        <div ref={drag} onClick={handleClick}>
            {props.col}
        </div>
    )
};

export default HeaderCell;
