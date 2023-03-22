import { fireEvent, render,screen } from "@testing-library/react";
import {MultipleCustomHooks} from '../../src/component/03-example/MultipleCustomHooks.jsx';
import { useFetch } from "../../src/hooks/useFetch";
import { useConter } from "../../src/hooks/useCounter";

//se genera mock del hooks useFetch
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test Component <MultipleCustomHooks />',() =>{

    //Esto es jest Function 
    const mockIncrement  = jest.fn();

    useConter.mockReturnValue({
        counter : 1,
        increment : mockIncrement
    });


    /*
        Funcion 
        ° beforeAll => Antes de de todas las prubas
        ° beforeEach => Antes de cada uno de las pruebas
        ° afterAll => Despues de de todas las prubas
        ° afterEach => Despues de cada uno de las pruebas
    */
        beforeEach( ()=>{
            //Con esto  limpia cada uno de las pruebas realizadas
            jest.clearAllMocks();

        });

    test('Test Visualizar Component por Default',()=>{

        //Se le asigna valor al mock de useFetch
        useFetch.mockReturnValue({
            data      : null,
            isLoading : true,
            hasError  : null
        });

        render(<MultipleCustomHooks />);
        
        //Valida que exista el texto en el componente
        expect(screen.getByText('BreakingBad Quotes'));
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText('Next Quote'));

        //Se Crea una constante que se iniciliza con el objeto button (name => Next Quote)
        const btnNextQuote = screen.getByRole('button',{name:'Next Quote'});
        expect(btnNextQuote.disabled).toBeTruthy();

        //screen.debug() //Console log html;
    });
    test('Test Visualizar Quote',()=>{

        //Se le asigna valor al mock de useFetch
        useFetch.mockReturnValue({
            data      : [{
                author : 'N.ruz',
                quote : 'Hola Mundo'
            }],
            isLoading : false,
            hasError  : null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('N.ruz'));
        expect(screen.getByText('Hola Mundo'));
        const btnNextQuote = screen.getByRole('button',{name:'Next Quote'});
        expect(btnNextQuote.disabled).toBeFalsy();

        //screen.debug() //Console log html;
    });
    test('Test Funcion Incrementar',()=>{
        useFetch.mockReturnValue({
            data      : [{
                author : 'N.ruz',
                quote : 'Hola Mundo'
            }],
            isLoading : false,
            hasError  : null
        });

        render(<MultipleCustomHooks />);
        const btnNextQuote = screen.getByRole('button',{name:'Next Quote'});
        //ejecuta la accion de click el el objeto button (Next Quote)
        fireEvent.click(btnNextQuote);

        expect(mockIncrement).toHaveBeenCalled();
    });    
});