import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateServiceDetailes from "../privateRoute/PrivateServiceDetailes";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/service/:id",
                element: <PrivateServiceDetailes>
                    <ServiceDetails></ServiceDetails>
                </PrivateServiceDetailes>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])
export default Route;