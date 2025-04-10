import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./App.css";
import "./styles/global.scss";
import { ThemeProvider } from "./shared/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
