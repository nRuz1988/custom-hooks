import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

/*
    **************    NOTAAAAAAA *******************************

    Si quieres  usar o probar los distimtos componente debes descomentar la importacion y
    agregar el componente en el render

*/

/*
  import {HooksApp} from './HooksApp';
  import {CounterApp} from './component/01-useState/CounterApp';
  import {CounterWithCustomHook} from './component/01-useState/CounterWithCustomHook';
  import {SimpleForm} from './component/02-useEffect/SimpleForm.jsx';
  import {FormWithCustomHook} from './component/02-useEffect/FormWithCustomHook';
  import {MultipleCustomHooks} from './component/03-example/MultipleCustomHooks';
  import {FocusScreen} from './component/04-useRef/FocusScreen';
  import {Layout} from './component/05-useLayoutEffect/Layout';
  import {Memorize} from './component/06-memo/Memorize';
  import {MemoHook} from './component/06-memo/MemoHook';
  import {CallbackHook} from './component/06-memo/CallbackHook';
  import {Padre} from './component/07-tarea-memo/Padre';
  import './component/08-useReducer/intro-reducer';
  import {TodoApp} from './component/08-useReducer/TodoApp';
  */
  import {MainApp} from './component/09-useContext/MainApp';
   
/*
  BrowserRouter => Recibe otros componentes dentro de el,Permite que todos los hijos que estan
                   dentro de el tengas cierto acceso a la informacion que provee el padre  <BrowserRouter>

*/
//<React.StrictMode></React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)