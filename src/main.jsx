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
import Dashboard from "./dashboard/Dashboard";
import {HelmetProvider } from "react-helmet-async";
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Security/PrivateRoute";
import DashboardRoot from "./AdminPannel/DashboardRoot/DashboardRoot";
import SkilitonLoader from "./AdminPannel/SkilitonLoader/SkilitonLoader";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddBlogs from "./AdminPannel/AdminPages/AddBlogs";
import GetInTouch from "./Components/GetInTouch/GetInTouch";

import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess";
import PaymentFail from "./Components/PaymentFail/PaymentFail";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdminHome from "./AdminPannel/AdminHome/AdminHome";

import AllUsers from "./AdminPannel/AdminPages/AllUsers.jsx";
import MeetTeam from "./Components/MeetTeam/MeetTeam.jsx";
import ManageBlogs from "./AdminPannel/AdminPages/ManageBlogs.jsx";
import UpdateBlog from "./AdminPannel/AdminPages/UpdateBlog.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Chat from "./Components/Chat/Chat.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/translate",
        element: <Translate />,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/chat",
        element: <Chat></Chat>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },

      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },

      {
        path: "payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },

      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/meetTeam",
        element: <MeetTeam></MeetTeam>,
      },
      {
        path: "/getintuch",

        element: <GetInTouch />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardRoot></DashboardRoot>,
    children: [
      // {
      //   path: "skeleton",
      //   element: <SkilitonLoader></SkilitonLoader>,
      // },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/addblogs",
        element: <AddBlogs />,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/manageBlogs",
        element: <ManageBlogs></ManageBlogs>,
      },
      {
        path: "/dashboard/blogs/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader:({params})=>fetch(`https://e-translator-server.vercel.app/blogs/${params.id}`)
      },
    ],
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
    
  }
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
