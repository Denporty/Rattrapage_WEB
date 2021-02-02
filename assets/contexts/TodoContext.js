import React, {createContext} from 'react';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name:"Travaux de peinture dans la salle à manger", company: "BricoFlex", customer: 'RUBEN Bartran', customerPostalCode: "95490", companyPostalCode: "95812" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstField: 'Nettoyage des murs et préparation sur mur', firstPrice: '200', secondField: 'Peinture acrylique sur le mur', secondPrice: '625', total: "825"},
                {name: "Graphic redesign", customer: 'MARC Edouard', company: "WebForce", firstField: 'Logo Design', customerPostalCode: "78812", companyPostalCode: "67450" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstPrice: '100', secondField: 'Web design', secondPrice: '175', thirdField: 'Web integration', thirdPrice: '500', total: "775"},
                {name: "Traitement de remontées capillaires", company: "Marc & JeanMarc BTP", customer: 'DUPUIT Pierre', customerPostalCode: "95300", companyPostalCode: "43870" , customerPhoneNumber: "07.67.45.67.87", companyPhoneNumber: "01.02.03.04.05", firstField: "Pose de centrale d'assèchement et de sondes", firstPrice: '1000', secondField: "Main d'oeuvre", secondPrice: '200', total: "1200"},
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

    updateTodo(){

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