import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Details from "../Components/Details/Details";
import Interest from "../Pages/Interest";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
            
        ]
    },
    {
        path:'/interest',
        element:<PrivateRoute><Interest/></PrivateRoute>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/details/:id',
        element:<PrivateRoute><Details/></PrivateRoute>,
        loader:()=> fetch('../data.json')
    },
    {
        path:'/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>
    }
    
   
])

export default router;