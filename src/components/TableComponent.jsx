import React, {useEffect, useState} from "react";
import {Paper, Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import HeaderCell from "./Cell";
import EmptyCell from "./EmptyCell";

const TableComponent = () => {
    // hardcoded data - to be replaced by API calls
    const columns = ["Location", "Name", "Age"];
    const users = [
        {Location: "NY", Name: 'Maciek', Age: 25, id: 1},
        {Location: "LA", Name: 'Janek', Age: 35, id: 2},
        {Location: "NY", Name: 'Felek', Age: 45, id: 3},
        {Location: "LA", Name: 'Janusz', Age: 55, id: 4},
        {Location: "NY", Name: 'Michał', Age: 65, id: 5}
    ];

    const [cols, setCols] = useState(columns);
    const [rows] = useState(users);
    const [orderBy, setOrderBy]= useState('Age');
    const [order, setOrder] = useState('asc');


    useEffect(() => {
        console.log(orderBy);
    }, [orderBy]);

// this function is taken straight from MaterialUI docs
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

// this function is taken straight from MaterialUI docs
    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

// this function is taken straight from MaterialUI docs
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const style = {
        textAlign: 'center',
        margin: '30px 0'
    };

    return (
        <div style={style}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {cols.map(col => (
                                <EmptyCell key={col} colId={cols.indexOf(col)} setCols={setCols} cols={cols}>
                                    <HeaderCell col={col} setOrderBy={setOrderBy} setOrder={setOrder} order={order}/>
                                </EmptyCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .map(row => (
                            <TableRow key={row.id}>
                                {Object.entries(row).map(([k, v], idx) => (
                                    <TableCell key={v}>
                                        {row[cols[idx]]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default TableComponent;