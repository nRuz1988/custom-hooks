import {  useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({author,quote}) => {

  
  const pRef = useRef();

  const [boxSize,setBoxSize] = useState({
    width : 0,
    height : 0
  });


  /*
    useLayoutEffect => Se ejecuta cuando se haya cargado por completo un elemento, tiene la misma 
    estructura que el useEffect
  */
  useLayoutEffect(() => {
    //Sirve para obtener el los elementos del parafo como por ejemplo el tamañp
    const {width,height} = pRef.current.getBoundingClientRect();

    setBoxSize({
      width,
      height
    })
    
  }, [quote])
  

  return (
    <>
        <blockquote 
        className='blockquote text-end'
        style={{display:'flex'}}
        >
                <p 
                  ref={pRef}
                  className='mb-1'>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
        <br />
    </>
  )
}
