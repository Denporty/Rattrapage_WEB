import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemIcon, makeStyles, Typography} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles(theme => ({
    menuIcon: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: '270px'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerItems = [
        {text: 'Créer et modifier un devis', icon: <NoteAddIcon/>, link: '/todo-list',},
        {text: 'Validation devis', icon: <PlaylistAddCheckIcon/>, link: '/tag-list',},
        {text: 'Vos devis', icon: <FindInPageIcon/>, link: '/check-quote',},
        {text: 'Rechercher un devis', icon: <SearchIcon/>, link: '/search-quote',},
    ];
    return(
        <AppBar position="fixed">
            <Toolbar>
                <IconButton onClick={toggleDrawer} className={classes.menuIcon} edge="start"><MenuIcon/></IconButton>
                <Link style={{flexGrow: 1}} href="/"  color="textPrimary">
                <Typography underline="none" color="textPrimary" variant="h6">TodoApp</Typography>
                </Link>
                <Button size="large">Login</Button>
            </Toolbar>
            <Drawer anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
                <List className={classes.list}>
                    {drawerItems.map(prop=> (
                        <Link className={classes.link} to={prop.link} key={prop.text}>
                        <ListItem onClick={toggleDrawer} button key={prop.text}>
                            <ListItemIcon>{prop.icon}</ListItemIcon>
                            <ListItemIcon>{prop.text}</ListItemIcon>
                        </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navigation;