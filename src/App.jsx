import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";
import { AppLayout } from "./Component/layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { CountryDetails } from "./Component/layout/CountryDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/",
        element: <Home />,
      },

      
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
