import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
<<<<<<< HEAD
import Translate from "./Pages/Translate/Translate";
=======
import Blog from "./Components/Blog/Blog";
import Login from "./Security/Login";
import AuthProvider from "./Security/AuthProvider";
import Error from "./Error";
import Register from "./Security/Register";
>>>>>>> 813ef7413498d4675795b7856d1d01efd05da6f4

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
<<<<<<< HEAD
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/translate',
        element:<Translate></Translate>
      }
    ]
=======
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
    ],
>>>>>>> 813ef7413498d4675795b7856d1d01efd05da6f4
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
