import "./App.css";

import Header from "./Home/Header";

import { Outlet, RouterProvider } from "react-router-dom";
import route from "./Home/routes";
import HomePage from "./Home/HomePage";

function App() {
  const APP_NAME = "ATS RESUME GENERATOR";
  return (
    <>
     <Outlet/>
    </>
  );
}

export default App;
