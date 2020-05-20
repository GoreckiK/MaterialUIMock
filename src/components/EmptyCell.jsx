import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import { useDrop } from "react-dnd";
import {ItemType} from "../constants";

const EmptyCell = (props) => {

    const [, drop] = useDrop({
        accept: ItemType.CELL,
        drop: item => handleDrop(item.id)
    });

    const handleDrop = (draggedItemId) => {
        const draggedColIndex = props.cols.indexOf(draggedItemId);
        const tempCols = [...props.cols];
        tempCols[props.colId] = props.cols[draggedColIndex];
        tempCols[draggedColIndex] = props.cols[props.colId];
        props.setCols(tempCols);
    };

    return (
        <TableCell ref={drop}>
            {props.children}
        </TableCell>
    )
};

export default EmptyCell;