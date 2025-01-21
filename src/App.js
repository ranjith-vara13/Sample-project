import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About"; // Import your About component
import Contact from "./components/Contact"; // Import your Contact component
import Error from "./components/Error";


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[

        { 
            path:"/",
            element:<Body/>,
        },

        {
            path: "/About",
            element: <About />, // Use JSX for elements
          },

          {
            path: "/Contact",
            element: <Contact />, // Use JSX for elements
          },
    ],
    errorElement:<Error/>, // Use JSX for elements
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);