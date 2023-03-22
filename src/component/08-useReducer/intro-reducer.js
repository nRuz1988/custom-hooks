
//Estado inicial es saber el estado que se encuentre algo ya sea una app, etc
const initialState = [{
    id : 1,
    todo : 'Recolectar las piedras de alma',
    done : false
}];

/*
    NOTA OPERADOR spread (...)

    este operador nos permite copiar de manera simple una parte o la totalidad de un 
    elemento array o un objeto en JavaScript,


*/


//Funcion Reducer
const todoRedeucer = (state = initialState,accion = {}) => {

    if(accion.type =='[TODO] add todo'){
        //Se hace una copia del estado anterior y se agrega el nuevo estado
        return [...state,accion.payload]
    }

    return state;
};


let todo = todoRedeucer();

//Nuevo estado 
const newTodo = [{
    id : 2,
    todo : 'Recolectar la piedra del poder',
    done : false
}];

//Usualmente se usa esta entructura para crear la accion
const addTodoAccion = {
    type : '[TODO] add todo',
    payload : newTodo
}

todo = todoRedeucer(initialState,addTodoAccion);


console.log({state : todo});