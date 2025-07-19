import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/Context.jsx";

/*
Purpose: Initializes the app by attaching it to the #root div in your HTML file (index.html).

How it works: This is where React takes over and mounts your entire app into the real DOM.
*/

createRoot(document.getElementById("root")).render(
  // strictMode: wrapper for potential problems in app
  // Wraps the entire app comp with the contextprov, this way the app can access any global context, in this case the api is
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
