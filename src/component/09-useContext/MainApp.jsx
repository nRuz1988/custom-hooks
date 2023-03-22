
//https://www.npmjs.com/package/react-router-dom/v/6.0.2
import { Routes,Route, Navigate} from 'react-router-dom';
import {HomePage,AboutPage,LoginPage,Navbar}  from './component/index';
import {UserProvider} from './context/UserProvider';

/*
  *  =>  En este caso indica que si la ruta no existe siempre mostrara Login, no cambia el valor del path
     => EL * implica cualquier palabra  

  Navige => Apenas se renderice al ver que no existe el path llamara al route designado   
*/

export const MainApp = () => {
  return (
    <UserProvider>
        <h1> Main App</h1>
        <Navbar />
        <hr />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='Login' element={<LoginPage />} />
            <Route path='About' element={<AboutPage />} />
            {/*<Route path='/*' element={<LoginPage />} />*/}
            <Route path='/*' element={<Navigate to='/Login' />} />

        </Routes>
    </UserProvider>
  )
}
