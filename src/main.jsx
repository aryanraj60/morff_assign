import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import AppContextProvider from "./context/AppContext.jsx";

// const debug =
//   process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyletronProvider value={engine} debugAfterHydration>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StyletronProvider>
  </React.StrictMode>
);
