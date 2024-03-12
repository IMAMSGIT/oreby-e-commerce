import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}></Route>)
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
