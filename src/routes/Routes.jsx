import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'chef/:chefId',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://savor-maxican-server-zubayer22.vercel.app/chef/${params.chefId}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;