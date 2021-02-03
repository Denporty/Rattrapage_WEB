import React, {createContext} from 'react';
import axios from 'axios';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.readTodo();
    }


    createTodo(event, todo) {

        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos: data,
        });

    }

    readTodo(){
        axios.get('/api/todo/read')
        .then(response => {
            this.setState({
                todos: response.data,
            })
        }).catch(error => {
            console.error(error);
        })
    }

    updateTodo(data){
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        })
        todo.name = data.name;
        todo.company = data.company;
        todo.customer = data.customer;
        todo.customerPostalCode = data.customerPostalCode;
        todo.companyPostalCode = data.companyPostalCode;
        todo.customerPhoneNumber = data.customerPhoneNumber;
        todo.companyPhoneNumber = data.companyPhoneNumber;
        todo.firstField = data.firstField;
        todo.secondField = data.secondField;
        todo.secondPrice = data.secondPrice;
        todo.thirdField = data.thirdField;
        todo.thirdPrice = data.thirdPrice;
        todo.total = data.total;


        this.setState({
            todos: todos,
        });
    }

    deleteTodo(data){
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        });

        todos.splice(todos.indexOf(todo), 1);

        this.setState({
            todos: todos,
        });
    }


    render(){
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>

                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;