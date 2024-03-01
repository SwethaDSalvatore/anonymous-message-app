import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GuestLayout from './layouts/Guest.jsx'
import ErrorPage from './pages/Error.jsx'
import App from './pages/App.jsx'
import TRDPage from './pages/TRDPages.jsx'
import SendMessage from "./pages/SendMessage.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/trd',
        element: <TRDPage />,
      },
      {
        path: '/sendmessage',
        element: <SendMessage/>,
      }
    ],
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
