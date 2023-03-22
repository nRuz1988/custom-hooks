import { useState } from "react"

export const useConter = (initialValue = 0) =>{

    const [counter,setCounter] = useState(initialValue);

    const increment = (value = 1) =>{
        //current = Es el valor actual (se utiliza para los test)
        setCounter((current) =>  current + value);
        //setCounter(counter + value);
    }
    const decrement = (value = 1) =>{

        //Valida que no sea menor a cero
        if(counter ===0) return;

        //current = Es el valor actual (se utiliza para los test)
        setCounter( (current) =>  current - value);
    }
    const reset = () =>{
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}