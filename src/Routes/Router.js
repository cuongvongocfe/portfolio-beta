import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";
import PortfolioList from "../Pages/Portfolio/PortfolioList";
import Aboutme from "../Pages/AboutMe/Aboutme";
import Contact from "../Pages/Contact/Contact";
export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <PortfolioList />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
