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

        return (
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo});
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
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Societe émettrice"/> 
                                <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Client"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Code postal du client"/> 
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Code postal de la societe émettrice"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Numéro de téléphone du client"/> 
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Numéro de téléphone de la societe émettrice"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Premiere ligne"/> 
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Prix premiere ligne"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Seconde ligne"/> 
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Prix seconde ligne"/> 
                            </TableCell>
                            <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Troisieme ligne"/> 
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value)
                                }} label="Prix troisieme ligne"/> 
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