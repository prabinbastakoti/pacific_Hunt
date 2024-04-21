import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage";
import Layout from "./routes/layout";
import JobsPage from "./routes/jobsPage";
import CompanyPage from "./routes/companyPage";
import Login from "./routes/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "/Jobs",
          element: <JobsPage />,
        },
        {
          path: "/Companies",
          element: <CompanyPage />,
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
