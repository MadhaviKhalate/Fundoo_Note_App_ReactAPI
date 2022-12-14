import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {connect} from 'react-redux';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 70,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 70,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export  function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleNotes = () =>{
        props.handleDrawer("notes")
        props.dispatch({type : "SET_Title_as_Notes"})
    }
    const handleRemainder = () =>{
        props.dispatch({type : "SET_Title_as_Remainder"})
    }
    const handleEditLabel = () =>{
        props.dispatch({type : "SET_Title_as_EditLabel"})
    }
    const handleArchive = () =>{
        props.handleDrawer("archive")
        props.dispatch({type : "SET_Title_as_Archive"})
    }
    const handleTrash = () =>{
        props.handleDrawer("trash")
        props.dispatch({type : "SET_Title_as_Trash"})
    }
    

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.drawer}>

                <List>
                    <ListItem button onClick={handleNotes}>
                        <ListItemIcon>
                            <LightbulbOutlinedIcon style={{ width: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <ListItem button onClick={handleRemainder}>
                        <ListItemIcon>
                            <NotificationsNoneOutlinedIcon style={{ width: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Remainder" />
                    </ListItem>
                    <ListItem button onClick={handleEditLabel}>
                        <ListItemIcon>
                            <EditOutlinedIcon style={{ width: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit Label" />
                    </ListItem>
                    <ListItem button onClick={handleArchive}>
                        <ListItemIcon>
                            <ArchiveOutlinedIcon style={{ width: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Archive" />
                    </ListItem>
                    <ListItem button onClick={handleTrash}>
                        <ListItemIcon>
                            <DeleteOutlineOutlinedIcon style={{ width: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>
                </List>
            </Drawer>

        </Box>
    );
}

 export default connect()(MiniDrawer);