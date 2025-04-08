import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/global.scss";
import "./App.css";
import { ThemeProvider } from "./shared/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
