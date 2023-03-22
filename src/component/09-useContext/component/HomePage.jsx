import { useContext } from 'react';
import {UserContext} from '../context/UserContext';

export const HomePage = () => {
  const { user, setUser } = useContext( UserContext );
  return (
    <>
        <h1 aria-label='h1'>Home</h1>

        <pre
          aria-label='pre'>
          { JSON.stringify( user, null, 3 ) }
        </pre>

    </>
  )
}
