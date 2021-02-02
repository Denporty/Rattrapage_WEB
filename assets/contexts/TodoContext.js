import React, {createContext} from 'react';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: "1", name:"Travaux de peinture dans la salle à manger", company: "BricoFlex", customer: 'RUBEN Bartran', customerPostalCode: "95490", companyPostalCode: "95812" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstField: 'Nettoyage des murs et préparation sur mur', firstPrice: '200', secondField: 'Peinture acrylique sur le mur', secondPrice: '625', total: "825"},
                {id: "2", name: "Graphic redesign", customer: 'MARC Edouard', company: "WebForce", firstField: 'Logo Design', customerPostalCode: "78812", companyPostalCode: "67450" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstPrice: '100', secondField: 'Web design', secondPrice: '175', thirdField: 'Web integration', thirdPrice: '500', total: "775"},
                {id: "3", name: "Traitement de remontées capillaires", company: "Marc & JeanMarc BTP", customer: 'DUPUIT Pierre', customerPostalCode: "95300", companyPostalCode: "43870" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstField: "Pose de centrale d'assèchement et de sondes", firstPrice: '1000', secondField: "Main d'oeuvre", secondPrice: '200', total: "1200"},
        ],
        };
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

    deleteTodo(){

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