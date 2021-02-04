//REACT
import React, {useContext} from 'react';
//CONTEXT
import {TodoContext} from '../contexts/TodoContext';
//MUI COMPONENTS
import {Button, Snackbar, SnackbarContent} from '@material-ui/core';



function AppSnackbar() {
    const context = useContext(TodoContext);


    return (
        <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
            <SnackbarContent message={context.message.text} action={[
            <Button key="dismiss">dismiss</Button>
            ]}/>
        </Snackbar>
    );
}

export default AppSnackbar;