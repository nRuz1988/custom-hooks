

export const todoReducer = (initialState,accion) =>{

    //Siempre tiene que devolver un state
    switch (accion.type){
        case 'add-todo':
            return [...initialState,accion.payload];   
        case 'remove-todo':
            return initialState.filter(todo => todo.id != accion.payload);  
        case 'toggle-todo':   
            return  initialState.map(todo => {
                
                if(todo.id == accion.payload){
                    return {
                        ...todo,
                        done : !todo.done //!Esto devuelve lo contrario del valor actual 
                    }
                }
                return todo;
            });  
        default:
            return initialState;
    }

}