import { useState,useMemo } from 'react';
import {useConter} from '../../hooks/';

const heavyStuff = (iteratorNumber = 1) => {
    for (let i = 0; i < iteratorNumber; i++){
        console.log('aaaa ');
    }
    return `${iteratorNumber} iteraciones realizadas`;
}
/*
    Nota 
    Existe memo como funcion React.memo  y  memo como hook useMemo
*/

export const MemoHook = () => {

  const {counter,increment} = useConter(4000);

  const [show,setShow] = useState(true);

 
    //Memo => Memoria un valor
    const memorizaValue = useMemo(
        ()=>heavyStuff(counter),
        [counter]
    );

  return (
    <>
        <h1>Counter : <small>{counter}</small>
        </h1>
        <hr />
        <h4 >{memorizaValue}</h4>
        <hr />
        <button 
            className="btn btn-primary mt-2"
            onClick={() => increment()}
        >+1
        </button>

        <button
            className="btn btn-outline-primary mt-2"
            onClick = {() => setShow( !show )}
        >
            Show/hide {JSON.stringify(show)}
        </button>
    </>
  )
}
