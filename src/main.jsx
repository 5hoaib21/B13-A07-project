import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: "",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>{router}</StrictMode>,
);
