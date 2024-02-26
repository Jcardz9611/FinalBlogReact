import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.css';

//Import de secciones de la aplicación
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './style.scss'



//Definición de Layout de páginas con componentes comunes
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


//Construcción de Router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
