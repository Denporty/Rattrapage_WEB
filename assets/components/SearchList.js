import React from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const SearchList = () => {
    return (
        <Box textAlign="center" marginTop="2em">
            <Typography variant="h4">Page de recherche de devis en cours de création</Typography>
            <Link to="/tag-list" style={{textDecoration: 'none'}}>
                <Button color="primary" variant="contained" size="large">
                    Retourner sur la page d'accueil
                </Button>
            </Link>
        </Box>
    );
};

export default SearchList;