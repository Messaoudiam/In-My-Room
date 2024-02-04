import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ItemPage from "./components/ItemPage";
import ConnexionPage from "./components/ConnexionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shoes/:id",
    element: <ItemPage />,
  },
  {
    path: "/je-me-connecte",
    element: <ConnexionPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
