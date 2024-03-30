import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./security/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";


//Observe the "!"" below, which tells TypeScript that you are certain document.getElementById("root")
//will not return null,
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
      <BrowserRouter>
      <AuthProvider>
                   <App />
      </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
