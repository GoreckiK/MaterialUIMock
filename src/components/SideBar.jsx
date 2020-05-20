// This component is taken straight from docs with little adjustments https://material-ui.com/components/drawers/#MiniDrawer.js

import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TableComponent from "./TableComponent";
import MaterialTreeView from "./TreeView";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [drawerIndex, setDrawerIndex] = useState(0);

    const componentMap = {
        0: (<Manual/>),
        1: (<TableComponent/>),
        2: (<MaterialTreeView/>)
    };

    const handleDrawerOpenClose = () => {
        setOpen(!open);
    };

    const handleSideBarItemClick = (index) => {
        setDrawerIndex(index);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerOpenClose}>
                        {theme.direction !== 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Manual', 'Dashboard Table', 'Tree View', 'IMS', 'Chart'].map((text, index) => (
                        <ListItem button key={text} onClick={() => handleSideBarItemClick(index)}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {componentMap[drawerIndex]}
            </main>
        </div>
    );
}

const Manual = () => (
    <div style={{textAlign: 'left'}}>
        <h3>Intro:</h3>
        <p>Skupiłem się głównie na przedstawieniu poszczególnych komponentów. Jeżeli chodzi o możliwości ich stylizacji to są ogromne, dzięki dostępnemu API.
        Tree View jest na tą chwilę w "labie", można instalować z paczki @material-ui/lab, za jakiś czas zostanie dodana do core'a.</p>
        <p>Głównie zwróćcie uwagę na komponent tabeli. Jak już wspomniałem MaterialUI nie ma w API drag&dropa tak jak jest to zaimplementowane w Summary Dashboard.
        Napisałem swoją implementację wykorzystując bardzo popularną paczkę react-dnd (licencja MIT): https://react-dnd.github.io/react-dnd/about. Działa ona na
        zasadzie zbliżonej do Reduxa jest na bieżąco rozwijana i nie zanosi się, żeby to się zmieniło. Sortowanie chciałęm wziąć bezpośrednio z documentacji żebyście
        zobaczyli jak wygląda nie przerabiany kod, to co zostało wzięte z doksów zostało skomentowane. Można tam oczywiście zastosować filtrowanie,
        paginacje itp ale to wszystko jest dostępne w doksach, nie będę się na tym skupiał.</p>
        <p>Jeżeli chodzi o sidebar to również jest bez problemu dostępny i ma spore możliwości customizacji. Logika do wyświetlania kontentu po zmianie widgetu na pewno może być
            lepsza i ładniej ostylowana, ale nie chciałem już na to poświęcać czas. To samo tyczy się nawigacji.</p>
    </div>
);
