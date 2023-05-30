import MainRoot from "../Pages/Client/MainRoot";
import Home from "../Pages/Client/Home";
import About from "../Pages/Client/About";
import Immigration from "../Pages/Client/Immigration";
import Country from "../Pages/Client/Country";
import Course from "../Pages/Client/Course";
import Blog from "../Pages/Client/Blog";
import Contact from "../Pages/Client/Contact";
import Details from "../Pages/Client/Details";
import AddProducts from "../Pages/Client/AddProducts";


export const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/immigration",
                element: <Immigration />
            },
            {
                path: "/country",
                element: <Country />
            },
            {
                path: "/course",
                element: <Course />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/elements",
                element: <AddProducts />
            },
            {
                path: "/:id",
                element: <Details />
            },
        ]
    }
]