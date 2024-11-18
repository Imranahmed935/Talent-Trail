import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Details from "../Components/Details/Details";
import Interest from "../Pages/Interest";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
        ]
    },
    {
        path:'/interest',
        element:<Interest/>
    },
    {
        path:'/details/:id',
        element:<Details/>,
        loader:()=> fetch('../data.json')
    }
])

export default router;