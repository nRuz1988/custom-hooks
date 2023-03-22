import {useEffect, useState} from 'react';
import {Message} from './Message';

export const SimpleForm = () => {

    const [formState,setFormState] = useState({
        userName : 'n.ruz',
        email : 'n.ruz@hotmail.com'
    });

    const {userName,email} = formState;

    //target => Se destructura el event para solo utilizar el target 
    const onInputChange = ({target}) =>{
        //Destructura el targe
        const {name, value} = target;
        //esto funciona si es que la variable del formState y del input.name son iguales
        setFormState({
            ...formState,
            [name]:value
        });
    }

    /*
        useEffect => Es una funcion hook 
            - Recibe una funcion como primer argumento y 
            - Recibe un arreglo de dependecia como segundo argumento,[] => indica que solo se ejecutara una vez
            - sirve para realizar peticiones secundarias

            useEffect(() => {
                 first => funcion de cuerpo
                return () => {
                    second => funcion de limpiar, cancelar observable, listener etc
                }
            }, [third])
    */

    //Se ejecutara el useEffect solo cuando el email haya cambiado de valor        
    useEffect(()=>{
        console.log('El email a cambiado ',email);
    },[email]);

    

  return (
    <>
        <h1>Formulario Simple</h1>
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
        {
            (userName == 'n.ruzF') && <Message />
        }
    </>
  )
}
