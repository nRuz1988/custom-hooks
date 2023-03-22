
import { act,fireEvent,renderHook } from "@testing-library/react";
import {useForm}  from '../../src/hooks/index';

describe('Test useForm', () =>{

    const initialForm = {
        name  : 'n.ruz',
        email : 'n.ruz@123.cl'
    }

    test('Valores por defaul', () =>{

        const {result} = renderHook(()=> useForm(initialForm));
       // console.log(result)
        expect(result.current).toEqual({
            name          : initialForm.name,
            email         : initialForm.email,
            setFormState  : expect.any(Function),
            onInputChange : expect.any(Function),
            onResetForm   : expect.any(Function),
        });

    });    

    test('Funcion onInputChange', () =>{

        const newValue ='nruz';

        const {result} = renderHook(()=> useForm(initialForm));
        const {onInputChange} = result.current;
       //Se Debe usar la funcion act ya que al llamar a la funcion decrement se cambia el estado (state)
        act(()=>{
            onInputChange({
                target : {
                    name  : 'name',
                    value : newValue
                }
            });
        });
        expect(result.current.name).toEqual(newValue);
    });
    
    test('Funcion onResetForm', () =>{

        const newValue ='nruz';

        const {result} = renderHook(()=> useForm(initialForm));
        const {onInputChange,onResetForm} = result.current;
       //Se Debe usar la funcion act ya que al llamar a la funcion decrement se cambia el estado (state)
        act(()=>{
            onInputChange({
                target : {
                    name  : 'name',
                    value : newValue
                }
            });
            onResetForm();
        });
        expect(result.current.name).toEqual(initialForm.name);
    });



});