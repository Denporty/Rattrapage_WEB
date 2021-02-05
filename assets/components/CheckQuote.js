import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import React, {useContext, useState, Fragment} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {makeStyles} from '@material-ui/core';



const useStyles = makeStyles(theme=>({
    thead: {
        backgroundColor: theme.palette.primary.main,
    },
    list: {
        backgroundColor: theme.palette.secondary.main,
    },
    width: {
        width: "120%",
    },
    width2: {
        width: "130%",
    },
    width3: {
        width: "200%",
    },
    width4: {
        width: "5%",
    }
}));


function CheckQuote(){

    const context = useContext(TodoContext);  

    const [editIsShown, setEditIsShown] = useState(false);
    const [editIsShown1, setEditIsShown1] = useState(false);
    const [editIsShown2, setEditIsShown2] = useState(false);
    const [editIsShown14, setEditIsShown14] = useState(false);
    const [editIsShown15, setEditIsShown15] = useState(false);

    const [editTodo, setEditTodo] = useState('');
    const [editTodo1, setEditTodo1] = useState('');
    const [editTodo2, setEditTodo2] = useState('');   
    const [editTodo14, setEditTodo14] = useState('');  
    const [editTodo15, setEditTodo15] = useState('');  
    
    


    const classes = useStyles();
        return (
            <Fragment>
            <Table>
                <TableHead className={classes.thead}>
                    <TableRow>
                        <TableCell>MonDevis.fr</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    <TableRow>
                        <TableCell>Intitulé du devis</TableCell>
                        <TableCell>Société émettrice</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>N° de devis</TableCell>
                        <TableCell>Statut du devis</TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                    <TableRow key={'todo ' + index}>

                    <TableCell>
                    {editIsShown === todo.id ?
                    <TextField value={editTodo} onChange={(event) => {setEditTodo(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                                                  <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown(false);
                        }}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.name
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown1 === todo.id ?
                    <TextField value={editTodo1} onChange={(event) => {setEditTodo1(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                                                 <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown1(false);
                        }}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.company
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown2 === todo.id ?
                    <TextField value={editTodo2} onChange={(event) => {setEditTodo2(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                                                  <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown2(false);
                        }}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.customer
                    }
                    </TableCell>
                    <TableCell>
                    {editIsShown14 === todo.id ?
                    <TextField value={editTodo14} onChange={(event) => {setEditTodo14(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                                                  <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown14(false);
                        }}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.customer
                    }
                    </TableCell>
                    <TableCell>
                    {editIsShown15 === todo.id ?
                    <TextField value={editTodo15} onChange={(event) => {setEditTodo15(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                                                 <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown15(false);
                        }}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.validationStep
                    }
                    </TableCell>


                    </TableRow>
                    ))}
                </TableBody>
            </Table>


            </Fragment>
            );           
}

export default CheckQuote;

