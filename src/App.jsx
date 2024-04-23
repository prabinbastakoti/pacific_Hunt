import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Layout from "./routes/Layout";
import Jobspage from "./routes/Jobspage";
import Companypage from "./routes/Companypage";
import Login from "./routes/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Home",
          element: <Homepage />,
        },
        {
          path: "/Jobs",
          element: <Jobspage />,
        },
        {
          path: "/Companies",
          element: <Companypage />,
        },

        {
          path: "/About us",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
