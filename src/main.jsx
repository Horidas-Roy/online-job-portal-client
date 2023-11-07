import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut.jsx/Root';
import Error from './pages/ErrorPage/Error';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import AddJob from './components/AddJob/AddJob';
import JobDetails from './components/JobDetails/JobDetails';
import MyBids from './pages/MyBids/MyBids';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <Error />,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/resister',
          element:<Resister></Resister>
        },
        {
          path:'/addJob',
          element:<AddJob></AddJob>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/myBids/:userEmail',
          element:<MyBids></MyBids>,
          loader:({params})=>fetch(`http://localhost:5000/bids/${params.userEmail}`)
        }
    ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
