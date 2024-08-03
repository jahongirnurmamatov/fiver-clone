import React from 'react'
import Navbar from './components/navbar/Navbar'
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';

function App() {
  const Layout = ()=>{
    return(
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/", 
          element:<Home/>
        },
        {
          path:"/gig/:id", 
          element:<Gig/>
        },
        {
          path:"/gigs", 
          element:<Gigs/>
        },
        {
          path:"/mygigs", 
          element:<MyGigs/>
        },
        {
          path:"/orders", 
          element:<Orders/>
        },
        {
          path:"/login", 
          element:<Login/>
        },
        {
          path:"/register", 
          element:<Register/>
        },
        {
          path:"/messages", 
          element:<Messages/>
        },
        {
          path:"/message/:id", 
          element:<Message/>
        },
        {
          path:"/add", 
          element:<Add/>
        },
  ]
    },
  ]);
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App