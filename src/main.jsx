import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Registrar el Service Worker (opcional)
import { registerSW } from "virtual:pwa-register";
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    console.log("✅ App lista para funcionar sin conexión");
  },
});

// Renderizar la app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
