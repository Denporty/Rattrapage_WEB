import Table from '@material-ui/core/Table'
import React, {useContext, useState} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TableHead, TableCell, TableBody, Icon, IconButton, TextField } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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
                            <TableCell>
                        <TextField value={addTodo13} onChange={(event) => {
                                setAddTodo13(event.target.value)
                                }} label="Total"/> 
                            </TableCell>
                            
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
                    <TableCell>{todo.name}</TableCell>
                    <TableCell>{todo.company}</TableCell>
                    <TableCell>{todo.customer}</TableCell>
                    <TableCell>{todo.customerPostalCode}</TableCell>
                    <TableCell>{todo.companyPostalCode}</TableCell>
                    <TableCell>{todo.customerPhoneNumber}</TableCell>
                    <TableCell>{todo.companyPhoneNumber}</TableCell>
                    <TableCell>{todo.firstField}</TableCell>
                    <TableCell>{todo.firstPrice}</TableCell>
                    <TableCell>{todo.secondField}</TableCell>
                    <TableCell>{todo.secondPrice}</TableCell>
                    <TableCell>{todo.thirdField}</TableCell>
                    <TableCell>{todo.thirdPrice}</TableCell>
                    <TableCell>{todo.total}</TableCell>
                    <TableCell>
                        <IconButton><EditIcon></EditIcon></IconButton>
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