import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Link, Box, Button, Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles} from '@material-ui/core';
import {Menu as MenuIcon, List as ListIcon, Label as LabelIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

}));

const Navigation = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerItems = [
        {text: 'Liste des devis', icon: <ListIcon/>},
        {text: 'Rechercher un devis', icon: <LabelIcon/>},
    ];
    return(
        <AppBar position="fixed">
            <Toolbar>
                <IconButton><MenuIcon/></IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;