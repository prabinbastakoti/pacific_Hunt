import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homePage.jsx';
import Layout from './routes/layout.jsx';
import Jobspage from './routes/jobsPage.jsx';
import Companypage from './routes/companyPage.jsx';
import Login from './routes/login.jsx';

// Display elements for different paths
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
