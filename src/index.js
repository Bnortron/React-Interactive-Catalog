import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // For Tailwind CSS and other global styles
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
