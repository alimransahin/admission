import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Layouts/Home";
import Shop from "./Components/Shop/Shop";
import Admission from "./Components/Admission/Admission";
import AuthProvider from "./Provider/AuthProviders";
import App from "./App";
import HomePage from "./Components/HomePage/HomePage";
// import Home from "./Components/Home/Home.js";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
