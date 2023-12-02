import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './pages/FirstPage/FirstPage.tsx';
import SecondPage from './pages/SecondPage/SecondPage.tsx';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstPage />
      },
      {
        path: "/secondPage",
        element: <SecondPage />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>,
);
