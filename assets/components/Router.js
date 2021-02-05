import React from 'react';
import TodoContextProvider from '../contexts/TodoContext';
import AppSnackbar from './AppSnackbar';
import Navigation from './Navigation';
import TodoTable from './TodoTable';

const Router = () => {
    return(
        <div>
        <Navigation/>
        <TodoContextProvider>
            <TodoTable/>
            <AppSnackbar/>
        </TodoContextProvider>
        </div>
    );
};

export default Router;