import {TodoList} from './component/TodoList';
import {TodoAdd} from './component/TodoAdd';
import {useTodo} from './hooks/useTodo';

/*
    El use Reducer es igual al useState con la diferencia que es ams utilizando cuando hay
    muchas acciones que puede modificar el state de la aplicacion 

*/



const initialState = [/*{
    //Fecha y hora  actual en numeros
        id : new Date().getTime(),
        descripcion : 'Recolectar la piedras del alma v1',
        done : false

    }*/
];

export const TodoApp = () => {


  const {todos,
         todoCount,
         pendingTodo,
         handleAddTodo,
         handleRemoveTodo,
         handleToggleTodo} 
    = useTodo(initialState)

  return (
    <>
        <h1>
            Todo App : { todoCount }  
            <small> Pendiente : { pendingTodo }</small>
        </h1>
        <br />
        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={todos}
                    onDeleteTodo = {handleRemoveTodo}
                    onToggleTodo = {handleToggleTodo}
                />
            </div>
            <div className='col-5'>
                <h4> Agreagar Todo</h4>
                <br />   
                <TodoAdd 
                    onNewTodo={handleAddTodo}
                /> 
            </div>
        </div>

    </>
  )
}
