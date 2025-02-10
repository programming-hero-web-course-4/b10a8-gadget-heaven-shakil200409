import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Statistics from "./Pages/Statistics";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
    ],
  },
]);

export default routes;
