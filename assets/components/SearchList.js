import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import React, {useContext, useState, Fragment} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import DeleteDialog from './DeleteDialog';
import {createStyles, makeStyles, withStyles} from '@material-ui/core';


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


function SearchList(){

    const context = useContext(TodoContext);  

    const [addTodo, setAddTodo] = useState('');
    const [addTodo1, setAddTodo1] = useState('');  
    const [addTodo2, setAddTodo2] = useState('');  
    const [addTodo3, setAddTodo3] = useState('');  
    const [addTodo4, setAddTodo4] = useState('');  
    const [addTodo5, setAddTodo5] = useState('');  
    const [addTodo6, setAddTodo6] = useState('');  
    const [addTodo7, setAddTodo7] = useState('');  
    const [addTodo8, setAddTodo8] = useState('');  
    const [addTodo9, setAddTodo9] = useState('');  
    const [addTodo10, setAddTodo10] = useState('');  
    const [addTodo11, setAddTodo11] = useState('');  
    const [addTodo12, setAddTodo12] = useState('');  
    const [addTodo13, setAddTodo13] = useState('');
    const [addTodo14, setAddTodo14] = useState('');
    const [addTodo15, setAddTodo15] = useState('');

    const [editIsShown, setEditIsShown] = useState(false);
    const [editIsShown1, setEditIsShown1] = useState(false);
    const [editIsShown2, setEditIsShown2] = useState(false);
    const [editIsShown3, setEditIsShown3] = useState(false);
    const [editIsShown4, setEditIsShown4] = useState(false);
    const [editIsShown5, setEditIsShown5] = useState(false);
    const [editIsShown6, setEditIsShown6] = useState(false);
    const [editIsShown7, setEditIsShown7] = useState(false);
    const [editIsShown8, setEditIsShown8] = useState(false);
    const [editIsShown9, setEditIsShown9] = useState(false);
    const [editIsShown10, setEditIsShown10] = useState(false);
    const [editIsShown11, setEditIsShown11] = useState(false);
    const [editIsShown12, setEditIsShown12] = useState(false);
    const [editIsShown13, setEditIsShown13] = useState(false);
    const [editIsShown14, setEditIsShown14] = useState(false);
    const [editIsShown15, setEditIsShown15] = useState(false);

    const [editTodo, setEditTodo] = useState('');
    const [editTodo1, setEditTodo1] = useState('');
    const [editTodo2, setEditTodo2] = useState('');   
    const [editTodo3, setEditTodo3] = useState('');   
    const [editTodo4, setEditTodo4] = useState('');   
    const [editTodo5, setEditTodo5] = useState('');
    const [editTodo6, setEditTodo6] = useState('');   
    const [editTodo7, setEditTodo7] = useState('');   
    const [editTodo8, setEditTodo8] = useState('');   
    const [editTodo9, setEditTodo9] = useState('');   
    const [editTodo10, setEditTodo10] = useState('');   
    const [editTodo11, setEditTodo11] = useState('');   
    const [editTodo12, setEditTodo12] = useState('');   
    const [editTodo13, setEditTodo13] = useState('');  
    const [editTodo14, setEditTodo14] = useState('');  
    const [editTodo15, setEditTodo15] = useState('');  
    
    

    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);

    const [todoToBeDeleted, setTodoToBeDeleted] = useState(null);
    const classes = useStyles();
        return (
            <Fragment>
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo, company: addTodo1, customer: addTodo2, customerPostalCode: addTodo3, companyPostalCode: addTodo4, customerPhoneNumber: addTodo5, companyPhoneNumber: addTodo6, firstField: addTodo7, firstPrice: addTodo8, secondField: addTodo9, secondPrice: addTodo10, thirdField: addTodo11, thirdPrice: addTodo12, total: addTodo13, trackingNumber: addTodo14});
                }}>
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
                        <TableCell></TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={classes.list}>
                        <TableCell>
                            <TextField  className={classes.width} value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Intitulé du devis"/>
                                                       </TableCell>
                                                       <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width} value={addTodo1} onChange={(event) => {
                                setAddTodo1(event.target.value)
                                }} label="Societe émettrice"/> 
                                <TextField value={addTodo2} onChange={(event) => {
                                setAddTodo2(event.target.value)
                                }} label="Client"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width} value={addTodo3} onChange={(event) => {
                                setAddTodo3(event.target.value)
                                }} label="Code postal client"/> 
                            <TextField className={classes.width} value={addTodo4} onChange={(event) => {
                                setAddTodo4(event.target.value)
                                }} label="Code postal societe"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width3} value={addTodo5} onChange={(event) => {
                                setAddTodo5(event.target.value)
                                }} label="N° téléphone client"/> 
                            <TextField className={classes.width3} value={addTodo6} onChange={(event) => {
                                setAddTodo6(event.target.value)
                                }} label="N° téléphone societe"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width} value={addTodo7} onChange={(event) => {
                                setAddTodo7(event.target.value)
                                }} label="Premiere ligne"/> 
                            <TextField className={classes.width} value={addTodo8} onChange={(event) => {
                                setAddTodo8(event.target.value)
                                }} label="Prix ligne 1"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width} value={addTodo9} onChange={(event) => {
                                setAddTodo9(event.target.value)
                                }} label="Seconde ligne"/> 
                            <TextField className={classes.width} value={addTodo10} onChange={(event) => {
                                setAddTodo10(event.target.value)
                                }} label="Prix ligne 2"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                            <TextField className={classes.width} value={addTodo11} onChange={(event) => {
                                setAddTodo11(event.target.value)
                                }} label="Troisieme ligne"/> 
                            <TextField className={classes.width} value={addTodo12} onChange={(event) => {
                                setAddTodo12(event.target.value)
                                }} label="Prix ligne 3"/> 
                            </TableCell>
                            <TableCell className={classes.width4}></TableCell>
                            <TableCell>
                        <TextField className={classes.width} value={addTodo13} onChange={(event) => {
                                setAddTodo13(event.target.value)
                                }} label="Total"/> 
                        <TextField className={classes.width3} value={addTodo14} onChange={(event) => {
                                setAddTodo14(event.target.value)
                                }} label="N° de devis"/> 
                            </TableCell>
                            <TableCell>
                            <TextField className={classes.width3} value={addTodo15} onChange={(event) => {
                                setAddTodo15(event.target.value)
                                }} label="Statut de devis"/> 
                            </TableCell>
                            

                            <TableCell>
                            <IconButton type="submit">
                                <AddIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Intitulé du devis</TableCell>
                        <TableCell>Société émettrice</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Code postal du client</TableCell>
                        <TableCell>Code postal de l'entreprise</TableCell>
                        <TableCell>Numéro de téléphone du client</TableCell>
                        <TableCell>Numéro de téléphone de l'entreprise</TableCell>
                        <TableCell>Premiére ligne</TableCell>
                        <TableCell>Montant premiére ligne</TableCell>
                        <TableCell>Seconde ligne</TableCell>
                        <TableCell>Montant seconde ligne</TableCell>
                        <TableCell>Troisiéme ligne</TableCell>
                        <TableCell>Montant troisiéme ligne</TableCell>
                        <TableCell>Total</TableCell>
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
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13, trackingNumber: editTodo14, validationStep: editTodo15});
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
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13, trackingNumber: editTodo14, validationStep: editTodo15});
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
                    <TextField value={editTodo2}

                      />
                        :
                    todo.secondField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown3 === todo.id ?
                    <TextField value={editTodo3}

                      />
                        :
                    todo.customerPostalCode
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown4 === todo.id ?
                    <TextField value={editTodo9}

                      />
                        :
                    todo.companyPostalCode
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown5 === todo.id ?
                    <TextField value={editTodo5}

                      />
                        :
                    todo.customerPhoneNumber
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown6 === todo.id ?
                    <TextField value={editTodo6}

                      />
                        :
                    todo.companyPhoneNumber
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown7 === todo.id ?
                    <TextField value={editTodo7}

                      />
                        :
                    todo.firstField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown8 === todo.id ?
                    <TextField value={editTodo8}

                      />
                        :
                    todo.firstPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown9 === todo.id ?
                    <TextField value={editTodo9}

                      />
                        :
                    todo.secondField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown10 === todo.id ?
                    <TextField value={editTodo10}

                      />
                        :
                    todo.secondPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown11 === todo.id ?
                    <TextField value={editTodo11}

                      />
                        :
                    todo.thirdField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown12 === todo.id ?
                    <TextField value={editTodo12}

                      />
                        :
                    todo.thirdPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown13 === todo.id ?
                    <TextField value={editTodo13}

                      />
                        :
                    todo.total
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown14 === todo.id ?
                    <TextField value={editTodo14}

                      />
                        :
                    todo.trackingNumber
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown15 === todo.id ?
                    <TextField value={editTodo15} onChange={(event) => {setEditTodo15(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13, trackingNumber: editTodo14, validationStep: editTodo15});
                         setEditIsShown15(false);
                        }}><DoneIcon/></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.validationStep
                    }
                    </TableCell>

                    <TableCell>
                    <IconButton onClick={() => {setEditIsShown(todo.id); setEditIsShown1(todo.id) ; setEditIsShown2(todo.id); setEditIsShown3(todo.id) ; setEditIsShown4(todo.id); setEditIsShown5(todo.id) ; setEditIsShown6(todo.id); setEditIsShown7(todo.id) ; setEditIsShown8(todo.id); setEditIsShown9(todo.id) ; setEditIsShown10(todo.id); setEditIsShown11(todo.id) ; setEditIsShown12(todo.id); setEditIsShown13(todo.id); setEditIsShown14(todo.id); setEditIsShown15(todo.id); setEditTodo(todo.name); setEditTodo1(todo.company); setEditTodo2(todo.customer); setEditTodo3(todo.customerPostalCode); setEditTodo4(todo.companyPostalCode); setEditTodo5(todo.customerPhoneNumber); setEditTodo6(todo.companyPhoneNumber); setEditTodo7(todo.firstField); setEditTodo8(todo.firstPrice); setEditTodo9(todo.secondField); setEditTodo10(todo.secondPrice); setEditTodo11(todo.thirdField); setEditTodo12(todo.thirdPrice); setEditTodo13(todo.total); setEditTodo14(todo.trackingNumber); setEditTodo15(todo.validationStep) }}><EditIcon></EditIcon></IconButton>
                        <IconButton><DeleteIcon onClick={() => {setDeleteConfirmationIsShown(true); setTodoToBeDeleted(todo)}}></DeleteIcon></IconButton>
                    </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </form>
            {deleteConfirmationIsShown && (

            <DeleteDialog todo={todoToBeDeleted} open={deleteConfirmationIsShown} setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>                
            )}
            </Fragment>
            );           
}

export default SearchList;

