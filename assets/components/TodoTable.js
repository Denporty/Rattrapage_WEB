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

function TodoTable(){

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

        return (
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo, company: addTodo1, customer: addTodo2, customerPostalCode: addTodo3, companyPostalCode: addTodo4, customerPhoneNumber: addTodo5, companyPhoneNumber: addTodo6, firstField: addTodo7, firstPrice: addTodo8, secondField: addTodo9, secondPrice: addTodo10, thirdField: addTodo11, thirdPrice: addTodo12, total: addTodo13});
                }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Intitulé du devis"/>
                                                       </TableCell>
                            <TableCell>
                            <TextField value={addTodo1} onChange={(event) => {
                                setAddTodo1(event.target.value)
                                }} label="Societe émettrice"/> 
                                <TextField value={addTodo2} onChange={(event) => {
                                setAddTodo2(event.target.value)
                                }} label="Client"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo3} onChange={(event) => {
                                setAddTodo3(event.target.value)
                                }} label="Code postal du client"/> 
                            <TextField value={addTodo4} onChange={(event) => {
                                setAddTodo4(event.target.value)
                                }} label="Code postal de la societe émettrice"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo5} onChange={(event) => {
                                setAddTodo5(event.target.value)
                                }} label="Numéro de téléphone du client"/> 
                            <TextField value={addTodo6} onChange={(event) => {
                                setAddTodo6(event.target.value)
                                }} label="Numéro de téléphone de la societe émettrice"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo7} onChange={(event) => {
                                setAddTodo7(event.target.value)
                                }} label="Premiere ligne"/> 
                            <TextField value={addTodo8} onChange={(event) => {
                                setAddTodo8(event.target.value)
                                }} label="Prix premiere ligne"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo9} onChange={(event) => {
                                setAddTodo9(event.target.value)
                                }} label="Seconde ligne"/> 
                            <TextField value={addTodo10} onChange={(event) => {
                                setAddTodo10(event.target.value)
                                }} label="Prix seconde ligne"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo11} onChange={(event) => {
                                setAddTodo11(event.target.value)
                                }} label="Troisieme ligne"/> 
                            <TextField value={addTodo12} onChange={(event) => {
                                setAddTodo12(event.target.value)
                                }} label="Prix troisieme ligne"/> 
                            </TableCell>
                        
                            <TableCell>
                        <TextField value={addTodo13} onChange={(event) => {
                                setAddTodo13(event.target.value)
                                }} label="Total"/> 
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
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                    <TableRow key={'todo ' + index}>

                    <TableCell>
                    {editIsShown === todo.id ?
                    <TextField value={editTodo} onChange={(event) => {setEditTodo(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown(false)}}></IconButton>
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
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown1(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown1(false)}}></IconButton>
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
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo2, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown2(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown2(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.customer
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown3 === todo.id ?
                    <TextField value={editTodo3} onChange={(event) => {setEditTodo3(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown3(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown3(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.customerPostalCode
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown4 === todo.id ?
                    <TextField value={editTodo4} onChange={(event) => {setEditTodo4(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id, name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown4(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown4(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.companyPostalCode
                    }

                    </TableCell>

                    <TableCell>
                    {editIsShown5 === todo.id ?
                    <TextField value={editTodo5} onChange={(event) => {setEditTodo5(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown5(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown5(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.customerPhoneNumber
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown6 === todo.id ?
                    <TextField value={editTodo6} onChange={(event) => {setEditTodo6(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown6(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown6(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.companyPhoneNumber
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown7 === todo.id ?
                    <TextField value={editTodo7} onChange={(event) => {setEditTodo7(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown7(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown7(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.firstField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown8 === todo.id ?
                    <TextField value={editTodo8} onChange={(event) => {setEditTodo8(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown8(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown8(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.firstPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown9 === todo.id ?
                    <TextField value={editTodo9} onChange={(event) => {setEditTodo9(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown9(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown9(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.secondField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown10 === todo.id ?
                    <TextField value={editTodo10} onChange={(event) => {setEditTodo10(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown10(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown10(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.secondPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown11 === todo.id ?
                    <TextField value={editTodo11} onChange={(event) => {setEditTodo11(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown11(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown11(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.thirdField
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown12 === todo.id ?
                    <TextField value={editTodo12} onChange={(event) => {setEditTodo12(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown12(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown12(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.thirdPrice
                    }
                    </TableCell>

                    <TableCell>
                    {editIsShown13 === todo.id ?
                    <TextField value={editTodo13} onChange={(event) => {setEditTodo13(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id : todo.id,name: editTodo, company: editTodo1, customer: editTodo2, customerPostalCode: editTodo3, companyPostalCode: editTodo4, customerPhoneNumber: editTodo5, companyPhoneNumber: editTodo6, firstField: editTodo7, firstPrice: editTodo8, secondField: editTodo9, secondPrice: editTodo10, thirdField: editTodo11, thirdPrice: editTodo12, total: editTodo13});
                         setEditIsShown13(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown13(false)}}></IconButton>
                         </Fragment>,
                      }}
                      />
                        :
                    todo.total
                    }
                    </TableCell>

                    <TableCell>
                    <IconButton onClick={() => {setEditIsShown(todo.id); setEditIsShown1(todo.id) ; setEditIsShown2(todo.id); setEditIsShown3(todo.id) ; setEditIsShown4(todo.id); setEditIsShown5(todo.id) ; setEditIsShown6(todo.id); setEditIsShown7(todo.id) ; setEditIsShown8(todo.id); setEditIsShown9(todo.id) ; setEditIsShown10(todo.id); setEditIsShown11(todo.id) ; setEditIsShown12(todo.id); setEditIsShown13(todo.id); setEditTodo(todo.name); setEditTodo1(todo.company); setEditTodo2(todo.customer); setEditTodo3(todo.customerPostalCode); setEditTodo4(todo.companyPostalCode); setEditTodo5(todo.customerPhoneNumber); setEditTodo6(todo.companyPhoneNumber); setEditTodo7(todo.firstField); setEditTodo8(todo.firstPrice); setEditTodo9(todo.secondField); setEditTodo10(todo.secondPrice); setEditTodo11(todo.thirdField); setEditTodo12(todo.thirdPrice); setEditTodo13(todo.total) }}><EditIcon></EditIcon></IconButton>
                        <IconButton><DeleteIcon></DeleteIcon></IconButton>
                    </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </form>
            );           
}

export default TodoTable;

