//REACT
import React, {Fragment, useContext} from 'react';
//CONTEXT
import {TodoContext} from '../contexts/TodoContext';
//MUI COMPONENTS
import {Button, Snackbar, SnackbarContent} from '@material-ui/core';

function checkLevel(level){
    switch (level) {
        case 'success':
            return 'green';
        case 'error':
            return 'red';
        default:
            return 'white';
    }
}

function AppSnackbar() {
    const context = useContext(TodoContext);


    return (
        <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
            {context.message.text && (
           <SnackbarContent style={{backgroundColor: checkLevel(context.message.level), whiteSpace: 'pre'}} 
           message={context.message.text
        } action={[
        <Button onClick={() => context.setMessage({})} 
        key="dismiss"
        color="inherit"
        >
            Fermer
        </Button>
        ]}/>
            )}
 
        </Snackbar>
    );
}

export default AppSnackbar;