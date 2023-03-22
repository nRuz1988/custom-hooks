import { useContext } from 'react';
import {UserContext} from '../context/UserContext';

export const AboutPage = () => {
  const { user, setUser } = useContext( UserContext );
  return (
    <>
        <h1 aria-label='h1'>About</h1>  

        <pre>
          { JSON.stringify( user, null, 3 ) }
        </pre>

    </>
  )
}
