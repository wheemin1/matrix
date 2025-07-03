import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create root once
const container = document.getElementById("root");
const root = createRoot(container!);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
