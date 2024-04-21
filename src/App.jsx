import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Products/>}> </Route>
      </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
