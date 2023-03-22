import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me volvi a dibujar');
  return (
    <>
        <button
            className="btn btn-primary mt-2"
            onClick={()=>{
                increment(5);
            }}

        >
        Incrementar
        </button>
    </>
  )
})
