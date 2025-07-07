import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";

// 전역 변수로 React 노출 (React 디버깅 가능)
window.React = React;

// Create root once
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
