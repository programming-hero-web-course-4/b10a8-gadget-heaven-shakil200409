import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Statistics from "./Pages/Statistics";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import Gadgets from "./Components/Gadgets";
import Details from "./Pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Gadgets />,
        loader: () => fetch("/gadgets.json"),
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/stats",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:product_id",
        element: <Details />,
        loader: () => fetch("/gadgets.json"),
      },
    ],
  },
]);

export default routes;
