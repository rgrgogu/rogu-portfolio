import { createBrowserRouter, Outlet } from "react-router-dom";
import Error404 from "../components/client/global/Error404";
import Portfolio from "../pages/Portfolio";
import Gallery from "../pages/Gallery";
import Behind from "../pages/Behind";
import Administrator from "../pages/Administrator"

const pages = [
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/behind",
    element: <Behind />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/admin",
    element: <Administrator />
  }
];

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error404 />,
    children: pages,
  },
]);

export default Route;
