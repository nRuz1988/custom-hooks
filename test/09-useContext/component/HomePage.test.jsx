import { render,screen } from '@testing-library/react';
import {UserContext} from '../../../src/component/09-useContext/context/UserContext';
import {HomePage}  from '../../../src/component/09-useContext/component/HomePage';

describe('Test Component <HomePage />',() =>{

    test('Test visualizar Sin user',() => {

        /*
            UserContext : No existe para la prueba por eso se debe extrablecer (<UserContext />)
            Provider : Sirve para proveer la informacion al  value  ( .Provider value={{user : null}} )
        */

        render(
            <UserContext.Provider value={{user : null}}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe("null");  

    });

    test('Test visualizar Con user',() => {

       const user = {
            id : 1,
            name : 'Nicolas ruz'
       }

        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());  

    });
});