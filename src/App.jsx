import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivatePage from "./components/PrivatePage/PrivatePage";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.login.isLoggedIn);
  console.log(login);
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <PrivatePage />,
    },

    // {
    //   index: true,
    //   element: <Navigate to="/login" replace />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
