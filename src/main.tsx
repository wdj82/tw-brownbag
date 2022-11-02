import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StyledApp from "./StyledApp";
import TailwindApp from "./TailwindApp";
import App from "./App";
// import "./tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/styled",
    element: <StyledApp />,
  },
  {
    path: "/tailwind",
    element: <TailwindApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
