import { Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Dialog from'@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function DeleteDialog(props) {
    const hide = () => {
        props.setDeleteConfirmationIsShown(false);
    };
    const context = useContext(TodoContext);
    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth={'sm'} open={props.open}>
            <DialogTitle>Etes vous-sur de vouloir supprimer ce devis ?</DialogTitle>
            <DialogContent>
                {props.todo.name}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Annuler</Button>
                <Button onClick={() => {context.deleteTodo({id: props.todo.id, name: props.todo.name});
            hide();}}>Supprimer</Button>
            </DialogActions>
        </Dialog>
    );
}
DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    todo: PropTypes.shape = ({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
};
export default DeleteDialog;