import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Greeting from "./pages/Greeting";
import "./styles/main.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Greeting />
    },
    {
      path: "/Welcome",
      element: <Welcome />
    },
    {
      path: "/Step-one",
      element: <StepOne />
    },
    {
      path: "/Step-two",
      element: <StepTwo />
    },
    {
      path: "/Step-three",
      element: <StepThree />
    },
    {
      path: "/Step-four",
      element: <StepFour />
    },
    {
      path: "/Thanks",
      element: <Thanks />
    },
    {
      path: "/Registration",
      element: <Registration />
    },
    {
      path: "/Login",
      element: <Login />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
