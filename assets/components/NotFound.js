import React from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <Box textAlign="center">
            <Typography variant="h1">Page not found 404</Typography>
            <Link to="/todo-list" style={{textDecoration: 'none'}}>
                <Button color="primary" variant="contained" size="large">
                    Retourner sur la page d'accueil
                </Button>
            </Link>
        </Box>
    );
};

export default NotFound;