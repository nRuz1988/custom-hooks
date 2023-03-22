import { render,screen,fireEvent } from '@testing-library/react';
import {UserContext} from '../../../src/component/09-useContext/context/UserContext';
import {LoginPage}  from '../../../src/component/09-useContext/component/LoginPage';

describe('Test Component <LoginPage />',() =>{

    const setUserMock = jest.fn();
    beforeEach(() =>{
        jest.clearAllMocks();
    });

    test('Test visualizar Sin user',() => {

        render(
            <UserContext.Provider value={{user : null,setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();    
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe("null");
    });

    test('Test visualizar Con user',() => {

        const user = { id: 777, name: 'test', email: 'test@google.com' }; 
        render(
            <UserContext.Provider value={{user : user,setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();    
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.id.toString());
    });


    test('Test visualizar Con user',() => {

        render(
            <UserContext.Provider value={{user : null,setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();    
        const btnCreateUser = screen.getByRole('button',{name:'Crear Usuario'});
        fireEvent.click(btnCreateUser);   
        //Indica que la funcion fue llamada con estos parametros ({ id: 123, name: 'Juan', email: 'juan@google.com' })
        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' }); 

    });
});