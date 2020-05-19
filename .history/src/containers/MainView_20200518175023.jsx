import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactVirtualizedTable from "../components/MaterialTable";
import SummaryDashboardTable from "../components/SummaryDashboardTable";
import ToolbarWithSearch from "../components/Toolbar";
import SideBar from "../components/SideBar";
import TableWithSorting from "../components/TableWithSorting";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

export default function MainView() {
    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <SummaryDashboardTable/>
        </div>
        // <div className={classes.root}>
        //     <AppBar position="static">
        //         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        //             <Tab label="Summary Dashboard table" {...a11yProps(0)} />
        //             <Tab label="Tree View | table D&D" {...a11yProps(1)} />
        //             <Tab label="Toolbar" {...a11yProps(2)} />
        //             <Tab label="SideBar" {...a11yProps(3)} />
        //             <Tab label="Table Sort" {...a11yProps(4)} />
        //         </Tabs>
        //     </AppBar>
        //     <TabPanel value={value} index={0}>
        //         {/* <ReactVirtualizedTable/> */}
        //     </TabPanel>
        //     <TabPanel value={value} index={1}>
        //         <SummaryDashboardTable/>
        //     </TabPanel>
        //     <TabPanel value={value} index={2}>
        //         {/* <ToolbarWithSearch/> */}
        //     </TabPanel>
        //     <TabPanel value={value} index={3}>
        //         {/* <ReactVirtualizedTable/> */}
        //     </TabPanel>
        //     <TabPanel value={value} index={4}>
        //         {/* <TableWithSorting/> */}
        //     </TabPanel>
        // </div>
    );
}
