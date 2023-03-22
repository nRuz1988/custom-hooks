import { useState,useEffect } from 'react'

export const Message = () => {

  const [coords,setCoords] = useState({x:0,y:0});

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

   useEffect(()=>{

        const OnMouseMove = ({x,y})=>{   
          setCoords({x,y});
        }; 
        window.addEventListener('mousemove',OnMouseMove);
        return()=>{
          window.removeEventListener('mousemove',OnMouseMove);  
          console.log('Limpia la func OnMouseMove');   
        }
   },[]); 

  return (
    <>
        <h3>Usuario ya existe</h3>
        {
          JSON.stringify(coords)
        }
    </>
  )
}
