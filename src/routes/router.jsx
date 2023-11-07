import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut.jsx/Root";
import Error from "../pages/ErrorPage/Error";
import Home from "../pages/Home/Home";


const router=createBrowserRouter[
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
]
    

export default router;