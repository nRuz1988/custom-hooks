import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {MainApp}  from '../../src/component/09-useContext/MainApp';

//https://reacttraining.com/react-router/web/guides/testing


describe('Test Component <MainApp />',() =>{

    test('Visualizar HomePage Default',() => {

        /* MemoryRouter : Esto es propiamente de React Router Doom (react-router-dom) y se utiliza para
        realizar pruena desde la consola con los Route ya que el MemoryRouter tiene toda las propiedad 
        necesarias   */ 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        const h1Tag = screen.getByLabelText('h1');
        expect(h1Tag.innerHTML).toContain('Home');
    });

    test('Visualizar LoginPage',() => {

        //initialEntries : Esta a la esperande de un arreglo el cual es segmento de la url
        render(
            <MemoryRouter initialEntries={['/Login']}>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        //Valida que exiata la palabra HomePage dentro de todo el HTML 
        //screen.debug();
        const h1Tag = screen.getByLabelText('h1');
        expect(h1Tag.innerHTML).toContain('Login');
    });
    
    test('Visualizar AboutPage',() => {

        //initialEntries : Esta a la esperande de un arreglo el cual es segmento de la url
        render(
            <MemoryRouter initialEntries={['/About']}>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        //Valida que exiata la palabra HomePage dentro de todo el HTML 
        const h1Tag = screen.getByLabelText('h1');
        expect(h1Tag.innerHTML).toContain('About');
    });
    
});