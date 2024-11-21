import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/home.tsx";
import { NotFound } from "../pages/not-found.tsx";

export const routes = createBrowserRouter([{ path: "/", element: <HomePage />, errorElement: <NotFound /> }]);
