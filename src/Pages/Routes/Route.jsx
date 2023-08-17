import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home/Home';
import Cars from "../Cars/Cars/Cars";
import Login from "../Login/Login";
import Register from "../Register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'cars',
          element: <Cars></Cars>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        }
      ]
    },
  ]);