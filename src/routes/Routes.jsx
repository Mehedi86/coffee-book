import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import CoffeeCards from "../components/CoffeeCards";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <p>Oooops...</p>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json')
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json')
                    }
                ]
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/coffees',
                element: <Coffees />,
                loader: () => fetch('../coffees.json')
            }
        ]
    }
])

export default router