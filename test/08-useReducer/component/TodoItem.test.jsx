import { fireEvent, render,screen } from "@testing-library/react";
import {TodoItem} from '../../../src/component/08-useReducer/component/TodoItem';


describe('Test Component <TodoItem/>', () =>{

    const todo = {
        id          : 1,
        description : 'Test TodoItem',
        done        : false
    };

    const onDeleteTodoMock =  jest.fn();
    const onToggleTodoMock =  jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Test Etiquetas Html pendiente', () =>{

        render(
            <TodoItem 
                todo = {todo}
                onDeleteTodo = {onDeleteTodoMock}
                onToggleTodo = {onToggleTodoMock}
            />
        );
         
        //Obtiene el contenido que tiene la etiqueta <li></li>
        const liElement = screen.getByRole('listitem'); 
        /*
            console.log(liElement.innerHTML);
            screen.debug() //Esto es para depurar
        */
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');    

        //Llama a la etiqueta span desde la palabra reservada aria-label
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });


    test('Test Etiquetas Html Completado', () =>{

        todo.done = true;

        render(
            <TodoItem 
                todo = {todo}
                onDeleteTodo = {onDeleteTodoMock}
                onToggleTodo = {onToggleTodoMock}
            />
        );
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
         
    });


    test('Test function onToggleTodo - Llama a function span onclick', () =>{

        render(
            <TodoItem 
                todo = {todo}
                onDeleteTodo = {onDeleteTodoMock}
                onToggleTodo = {onToggleTodoMock}
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        //Realiza el llamado a la funcion onToggleTodo desde la etiqueta span
        fireEvent.click(spanElement);   
        
        //Valida que se haya llamado la funcion onToggleTodo con el valor del id 
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

         
    });


    test('Test function onDeleteTodo - Llama a function btn onclick', () =>{

        render(
            <TodoItem 
                todo = {todo}
                onDeleteTodo = {onDeleteTodoMock}
                onToggleTodo = {onToggleTodoMock}
            />
        );
        
        const btnDeleteTodo = screen.getByRole('button',{name:'Borrar'});

        //Realiza el llamado a la funcion onToggleTodo desde la etiqueta span
        fireEvent.click(btnDeleteTodo);   
        
        //Valida que se haya llamado la funcion onDeleteTodo con el valor del id 
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

         
    });
});