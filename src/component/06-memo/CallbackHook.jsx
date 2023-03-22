import {useState,useCallback} from 'react';
import {ShowIncrement} from './component/ShowIncrement';

export const CallbackHook = () => {

    const [counter,setCounter] = useState(1);


    /*
        useCallback => sirve para memorizar funciones y es funcio memorizada solo se volvera 
        a ejecutar cuando algo haya cambiado en especifico, devuelve una funcion que se 
        puede ejecutar
    */

   const incrementFataher = useCallback((value) => {

        /*
            Se toma el valir actual(value) de counter y se le va sumando 1, esto funciona debido
            a que la funcion incrementFataher esta memorizada y la almacena en mismo espacio en
            memoria
        */
        setCounter( (counterAct) => counterAct +value);
      },
      [],
    );
    


  return (
    <>
        <h1>useCallbackHook : {counter}</h1>
        <hr />
        <ShowIncrement 
            increment={incrementFataher}
        />


    </>
  )
}
