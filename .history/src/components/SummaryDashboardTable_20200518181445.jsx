import React from "react";
import {Paper, Table, Tab} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { ItemType } from "../constants";
// import update from 'immutability-helper';

// const type = 'DragableBodyRow';
//
// const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
//     const ref = React.useRef();
//     const [{ isOver, dropClassName }, drop] = useDrop({
//         accept: type,
//         collect: monitor => {
//             const { index: dragIndex } = monitor.getItem() || {};
//             if (dragIndex === index) {
//                 return {};
//             }
//             return {
//                 isOver: monitor.isOver(),
//                 dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
//             };
//         },
//         drop: item => {
//             moveRow(item.index, index);
//         },
//     });
//     const [, drag] = useDrag({
//         item: { type, index },
//         collect: monitor => ({
//             isDragging: monitor.isDragging(),
//         }),
//     });
//     drop(drag(ref));
//
//     return (
//         <tr
//             ref={ref}
//             className={`${className}${isOver ? dropClassName : ''}`}
//             style={{ cursor: 'move', ...style }}
//             {...restProps}
//         />
//     );
// };

const SummaryDashboardTable = () => {
    const headers = ["Location", "Name", "Age"];
    const users = [
        {location: "NY", name: 'Maciek', age: 25},
        {location: "LA", name: 'Janek', age: 35},
        {location: "NY", name: 'Michał', age: 45}
    ];
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemType.CELL },
        collect: monitor => ({ isDragging: !!monitor.isDragging })
    })

    return (
        <Paper style={{height: "40%", width: "40%"}}>
            <DndProvider={}>
                <Table>
                    <TableHead>
                        <TableRow ref={drag}>
                            {headers.map((header, id) => {
                                return (
                                    <TableCell key={id}>{header}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, id) => {
                            return (
                                <TableRow key={id}>
                                    <TableCell key={id}>{user.location}</TableCell>
                                    <TableCell key={id}>{user.name}</TableCell>
                                    <TableCell key={id}>{user.age}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </DndProvider>
        </Paper>
    );
};

export default SummaryDashboardTable;

// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//     },
// ];

// class DragSortingTable extends React.Component {
//     state = {
//         data: [
//             {
//                 key: '1',
//                 name: 'John Brown',
//                 age: 32,
//                 address: 'New York No. 1 Lake Park',
//             },
//             {
//                 key: '2',
//                 name: 'Jim Green',
//                 age: 42,
//                 address: 'London No. 1 Lake Park',
//             },
//             {
//                 key: '3',
//                 name: 'Joe Black',
//                 age: 32,
//                 address: 'Sidney No. 1 Lake Park',
//             },
//         ],
//     };
//
//     components = {
//         body: {
//             row: DragableBodyRow,
//         },
//     };
//
//     moveRow = (dragIndex, hoverIndex) => {
//         const { data } = this.state;
//         const dragRow = data[dragIndex];
//
//         this.setState(
//             update(this.state, {
//                 data: {
//                     $splice: [
//                         [dragIndex, 1],
//                         [hoverIndex, 0, dragRow],
//                     ],
//                 },
//             }),
//         );
//     };
    //
    // render() {
    //     return (
    //         <DndProvider backend={HTML5Backend}>
    //             <Paper style={{height: "40%", width: "40%"}}>
    //                 <Table>firstHead
    //                     <TableHead>
    //                         <TableRow>
    //                             <TableCell>
    //                                 firstHead
    //                             </TableCell>
    //                             <TableCell>
    //                                 secondHead
    //                             </TableCell>
    //                             <TableCell>
    //                                 thirdHead
    //                             </TableCell>
    //                         </TableRow>
    //                     </TableHead>
    //                     <TableBody>
    //                         {createRow()}
    //                         {createRow()}
    //                         {createRow()}
    //                     </TableBody>
    //                 </Table>
    //             </Paper>
    //         </DndProvider>
    //     );
    // }
// }
