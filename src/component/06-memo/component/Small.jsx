import {memo} from 'react';
/*
    memo => Es un metodo,Recibe como parametro el componente y lo va a memorizar, solo cuando los protypes 
    cambias se va ejecutar, se puede utilizar de esta forma igual 
    import {React} from 'react';
    React.memo
*/

export const Small = memo(({value}) => {

  console.log('Me volvi a dibujar');

  return (
    <>
        <small>{value}</small>
    </>
  )
});
