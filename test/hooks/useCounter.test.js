import { act,renderHook } from "@testing-library/react";
import {useConter}  from '../../src/hooks/index';


describe('Test useCounter', () =>{

    test('valor x defaul', () =>{

        const {result} = renderHook(()=> useConter());
        const {counter,increment,decrement,reset} = result.current;
        
        //Se comparan con 10 ya que es el valor de dafault
        expect(counter).toBe(0);
        //Se comparan  diciendo que es igual a un tipo funcion   
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));    
    });

    test('valor inicializado en 100', () =>{

        const {result} = renderHook(()=> useConter(100));
        const {counter} = result.current;
         //Se comparan con 10 ya que es el valor de dafault
         expect(counter).toBe(100);   
     });

    test('Function increment', () =>{
        const {result} = renderHook(()=> useConter());
        const {increment} = result.current;

        act(()=>{
            increment(100)
        });
        expect(result.current.counter).toBe(100);
          
    });

    test('Function decrement', () =>{
        const {result} = renderHook(()=> useConter(100));
        const {decrement} = result.current;

        //Se Debe usar la funcion act ya que al llamar a la funcion decrement se cambia el estado (state)
        act(()=>{
            decrement(50)
        });
        expect(result.current.counter).toBe(50);   
    });

    test('Function reset', () =>{
        const {result} = renderHook(()=> useConter(100));
        const {reset} = result.current;

        act(()=>{
            reset()
        });
        expect(result.current.counter).toBe(100);   
    });
});