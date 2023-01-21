import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import InputExample from "./pages/inputExample";
import LocalStorage from "./pages/localStorage";
import Redux from "./pages/Redux";

const routes = [
  { path: "/", element: <App /> },
  { path: "/input-example", element: <InputExample /> },
  { path: "/localstorage", element: <LocalStorage /> },
  { path: "/redux-counter", element: <Redux /> },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
