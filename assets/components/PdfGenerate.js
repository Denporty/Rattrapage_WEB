import React from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const PdfGenerate = () => {
    return (
        <Box textAlign="center" marginTop="20%">
            <Typography variant="h6">Votre PDF vas être généré</Typography>
            <Typography>S'il ne se génére pas recharger la page.</Typography>
            <Link to="/todo-list" style={{textDecoration: 'none'}}>
                <Button color="primary" variant="contained" size="large">
                    Retourner sur la page d'accueil
                </Button>
            </Link>
        </Box>
    );
};

export default PdfGenerate;