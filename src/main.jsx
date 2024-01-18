import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element:<Root></Root>
    
=======
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
>>>>>>> 475954b36a0a43eaac9da22a40a65550836440d2
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);