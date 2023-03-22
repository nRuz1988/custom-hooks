import {useState} from 'react';

export const useForm = (initialForm = {}) =>{

    const [formState,setFormState] = useState(initialForm);

    //target => Se destructura el event para solo utilizar el target 
    const onInputChange = ({target}) =>{
        //Destructura el targe
        const {name, value} = target;
        //esto funciona si es que la variable del formState y del input.name son iguales
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const onResetForm = () =>{

        setFormState(initialForm);
    }

    return {
        ...formState,
        setFormState,
        onInputChange,
        onResetForm
    }
}