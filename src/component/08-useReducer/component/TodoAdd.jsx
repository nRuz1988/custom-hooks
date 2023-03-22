import {useForm} from '../../../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

  const {descripcion,setFormState,onInputChange,onResetForm} =  useForm({
      descripcion : ''
  });


  const onFormSubmit = (event) =>{
    event.preventDefault();

    if(descripcion.length <=1) return;

    const newTodo = {
      id : new Date().getTime(), //Fecha y hora  actual en numeros
      descripcion,
      done : false
    }
    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
            text='text'
            placeholder='Agregar Todo'
            className='form-control'
            name='descripcion'
            value={descripcion}
            onChange={onInputChange}
        /> 
        <button
            type='submit'
            className='btn btn-outline-primary mt-2'
        >
          Agregar
        </button>   
      </form>
    </>
  )
}
