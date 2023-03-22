
import { useEffect, useReducer } from 'react';
import {todoReducer} from '../TodoReducer';

const init = () =>{
    /*
        leer la informacion que esta almacenada en localStorage y la parsea, en caso de estar 
        vacio devuelve un []
    */ 
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) =>{

    const [todos,dispatch] = useReducer(todoReducer,initialState,init);  

    useEffect(() => {

        /*
            localStorage => Ya esta implementado por defaul por ende no se debe importar y solo
            recibe valores de tipo string
        */
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const  handleAddTodo = (todo) =>{
   
        const action = {
            type : 'add-todo',
            payload : todo
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) =>{

        dispatch({
            type : 'remove-todo',
            payload : id
        });
    }
    
    const handleToggleTodo = (id =>{
        dispatch({
            type : 'toggle-todo',
            payload : id
        });
    });

    return {
        todos,
        todoCount : todos.length,
        pendingTodo : todos.filter(todo => !todo.done).length,
        handleAddTodo,
        handleRemoveTodo,
        handleToggleTodo
    }

}