import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateServiceDetailes from "../privateRoute/PrivateServiceDetailes";
import Error from "../pages/Error";
import PrivateContact from "../privateRoute/PrivateContact";
import Gallery from "../pages/Gallery";
import PrivateGallery from "../privateRoute/PrivateGallery";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
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
                path: "/contact",
                element: <PrivateContact>
                    <Contact></Contact>
                </PrivateContact>
            },
            {
                path: "/gallery",
                element: <PrivateGallery>
                    <Gallery></Gallery>
                </PrivateGallery>
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