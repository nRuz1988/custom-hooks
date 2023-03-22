import { todoReducer } from "../../src/component/08-useReducer/TodoReducer";


describe('Test Function todoReducer', () =>{
    
    const initialState = [{
        id    : 1,
        todo  : 'todo #1',
        done  : false
    }];

    test('Retornar Estado Inicial Default', () =>{

       const newInitialState = todoReducer(initialState,{});
       //toBe => Valida que sea el mismo objeto en el mismo expacio de memoria
       expect(newInitialState).toBe(initialState); 
    });

    test('Agregar un todo - add-todo', () =>{

        const accion = {
            type    : 'add-todo',
            payload : {
                id    : 2,
                todo  : 'todo #2',
                done  : false
            }
        }

        const newInitialState = todoReducer(initialState,accion);
        //Valida la cantidad de objetos
        expect(newInitialState.length).toBe(2);
        //Valida que tenga el objeto  
        expect(newInitialState).toContain(accion.payload); 
    });

    test('Eliminar un todo - remove-todo', () =>{

        const accion = {
            type    : 'remove-todo',
            payload : 1
        }

        const newInitialState = todoReducer(initialState,accion);
        //Valida la cantidad de objetos
        expect(newInitialState.length).toBe(0);
    });

    test('Validar el Toggle todo - toggle-todo', () =>{

        const accion = {
            type    : 'toggle-todo',
            payload : 1
        }

        const newInitialState = todoReducer(initialState,accion);
        //Valida la cantidad de objetos
        expect(newInitialState[0].done).toBe(true);
    });
});