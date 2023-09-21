//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Reservation from "./pages/reservation";

const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/reserve_table", element: <Reservation /> },
]);

function App()
{

    return <RouterProvider router={BrowserRouter} />
}

export default App
