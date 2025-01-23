import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <p>Oooops...</p>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/coffees',
                element: <Coffees/>
            }
        ]
    }
])

export default router