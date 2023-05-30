import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";

const router = createBrowserRouter(ROUTES);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
  </ChakraProvider>
);
