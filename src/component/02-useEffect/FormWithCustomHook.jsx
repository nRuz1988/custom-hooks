import {useEffect} from 'react';
import {Message} from './Message';
import {useForm} from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const {userName,email,password,setFormState,onInputChange,onResetForm} = useForm({
        userName  : 'n.ruz',
        email     : 'n.ruz@hotmail.com',
        password  : ''
    });
    //const {userName,email,password} = setFormState;

    
  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
        <h1 />
        <input 
            type='text'
            className='form-control'
            placeholder='UserName'
            name='userName'
            value={userName}
           onChange={onInputChange}//por defacult envia event
        />
        <input 
            type='text'
            className='form-control mt-2'
            placeholder='n.ruz@hotmail.com'
            name='email'
            value={email}         
            onChange={onInputChange}//por defacult envia event   
        />    
        <input 
            type='password'
            className='form-control mt-2'
            placeholder='password'
            name='password'
            value={password}         
            onChange={onInputChange}//por defacult envia event   
        />  

        <button onClick={onResetForm} className='btn btn-primary mt-2'>Reset</button>
    </>
  )
}
