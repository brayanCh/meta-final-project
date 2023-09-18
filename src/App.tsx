//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';

const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
]);

function App()
{

    return <RouterProvider router={BrowserRouter} />
}

export default App
