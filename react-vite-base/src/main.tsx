import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import microApp from "@micro-zoe/micro-app";

microApp.start();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

// entry

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
