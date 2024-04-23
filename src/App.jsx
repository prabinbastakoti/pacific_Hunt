import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homePage';
import Layout from './routes/layout';
import Jobspage from './routes/jobsPage';
import Companypage from './routes/companyPage';
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/Home',
        element: <Homepage />,
      },
      {
        path: '/Jobs',
        element: <Jobspage />,
      },
      {
        path: '/Companies',
        element: <Companypage />,
      },

      {
        path: '/About us',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
