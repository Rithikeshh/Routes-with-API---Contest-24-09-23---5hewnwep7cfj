import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from '../components/Home';
import Top from '../components/Top';
import Contact from '../components/Contact';


import App from "./App";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/top-10",
        element:<Top/>
      },
      {
        path : '/contact',
        element:<Contact/>
      }
    ]
  }
])
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
