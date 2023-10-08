import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import { AuthContext } from "./Provider/AuthProviders";

function App() {
  const { darkMode } = useContext(AuthContext);
  return (
    <div data-theme={darkMode === true ? "night" : "light"}>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
