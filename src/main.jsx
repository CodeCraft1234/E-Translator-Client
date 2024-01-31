import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Components/Blog/Blog";
import Login from "./Security/Login";
import AuthProvider from "./Security/AuthProvider";
import Error from "./Error";
import Register from "./Security/Register";
import Translate from "./Pages/Translate/Translate";
import ForgetPassword from "./Security/ForgetPassword";
import Features from "./Components/Features/Features";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Security/PrivateRoute";

import {  HelmetProvider } from 'react-helmet-async';

import DashboardRoot from "./AdminPannel/DashboardRoot/DashboardRoot";

import SkilitonLoader from "./AdminPannel/SkilitonLoader/SkilitonLoader";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddBlogs from "./AdminPannel/AdminPages/AddBlogs";
import GetInTouch from "./Components/GetInTouch/GetInTouch";


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
        path:'/features',
        element:<Features></Features>

      },
      {
        path:"/translate",
        element:<Translate/>
      },
      {
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
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>
      },
      {

        path: "/order",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        
      },

        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/getintuch",
        element: <GetInTouch/>
      }
     

      
    ],
  },
  {
    path:'dashboard',
    element:<DashboardRoot></DashboardRoot>,
    children:[
      {
        path:'skeleton',
        element:<SkilitonLoader></SkilitonLoader>
      },
      {
        path:'/dashboard/addblogs',
        element:<AddBlogs/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
   
  </React.StrictMode>
);
