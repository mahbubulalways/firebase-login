import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Route/PrivateRoute';
import Orders from './Components/Orders';
import Profile from './Components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
       element: <Home></Home>,
      },
      {
        path: "/orders",
       element: <PrivateRoute><Orders></Orders></PrivateRoute>,
      },
      {
        path: "/profile",
       element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/login",
       element: <Login></Login>,
      },
      {
        path: "/register",
       element:<Register></Register> ,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>   
      <RouterProvider router={router} />
</AuthProvider>
       
  </React.StrictMode>,
)
