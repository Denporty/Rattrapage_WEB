import React from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const SearchQuote = () => {
    return (
        <Box textAlign="center" marginTop="20%">
            <Typography variant="h6">Page en cours de création</Typography>
            <Link to="/todo-list" style={{textDecoration: 'none'}}>
                <Button color="primary" variant="contained" size="large">
                    Retourner sur la page d'accueil
                </Button>
            </Link>
        </Box>
    );
};

export default SearchQuote;