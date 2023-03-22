import { fireEvent, render,screen } from "@testing-library/react";
import {TodoApp}  from '../../src/component/08-useReducer/TodoApp';
import {useTodo} from '../../src/component/08-useReducer/hooks/useTodo';

jest.mock('../../src/component/08-useReducer/hooks/useTodo');


describe('Test Component <TodoApp/>', () =>{

    const todos = [
        {id : 1,description : 'Todo #1',done : false},
        {id : 2,description : 'Todo #2',done : true}
    ]

    useTodo.mockReturnValue({
        todos:todos,
        todoCount : 2,
        pendingTodo : 1,
        handleAddTodo : jest.fn(),
        handleRemoveTodo : jest.fn(),
        handleToggleTodo : jest.fn()
    });

    test('Visualizar el Conponente correctamente', () =>{

        render(<TodoApp />);
        //screen.debug();
        //getByRole('button',{name:'Agregar'})
        expect(screen.getByRole('textbox').name).toBe('descripcion');

    });

});