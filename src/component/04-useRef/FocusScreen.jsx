import { useRef } from 'react'

export const FocusScreen = () => {

  //useRef => Sieve para cambiar de estado un valor pero no recarga el doom  
  const inputRef =  useRef();  

   const onClickBtn = () =>{
    //current => Es una palabra reservada, obtiene todo el html(input) actual 
    inputRef.current.select();
   } 



  return (
    <>
        <h1>Focus Screem</h1>
        <input
            ref = {inputRef} //inputRef => Se le asigna todo el input 
            type='text'
            placeholder='Ingrese su Nombre'
            className='form-control'
        />

        <button
            className="btn btn-primary mt-2"
            onClick={onClickBtn}
        >Focus</button>
    </>
  )
}
