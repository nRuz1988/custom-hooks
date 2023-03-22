import {useConter} from '../../hooks/useCounter';


export const CounterWithCustomHook = () => {

   const {counter,increment,decrement,reset} = useConter(1); 
    

  return (
    <>
        <h1>Counter con Hook : {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={ () => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
    </>
  )
}
