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
import BidRequest from './components/BidRequest/BidRequest';
import MyPostedJobs from './components/myPostedJobs/MyPostedJobs';
import UpdatePostedJob from './components/updatePostedJob/UpdatePostedJob';
import PrivateRoute from './routes/PrivateRoute';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/myBids',
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
          // loader:({params})=>fetch(`http://localhost:5000/bids/${params.userEmail}`)
        },
        {
          path:'/bidsReq/:userEmail',
          element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/bidReq/${params.userEmail}`)
        },
        {
          path:'/postedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
          // loader:({params})=>fetch(`http://localhost:5000/postedJobs/${params.userEmail}`)
        },
        {
          path:'/updateJob/:id',
          element:<UpdatePostedJob></UpdatePostedJob>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
    ]
}
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
