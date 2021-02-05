import React from 'react';
import {MuiThemeProvider, createMuiTheme, CssBaseline} from '@material-ui/core';
import { blueGrey, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: indigo,
        secondary: blueGrey,
    }
});

const DefaultThemeProvider = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </MuiThemeProvider>
    );
};

export default DefaultThemeProvider;