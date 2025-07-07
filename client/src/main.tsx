import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create root once
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
