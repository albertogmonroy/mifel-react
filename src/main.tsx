import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRender } from "./pages/App/AppRender.tsx";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store} >
    <React.StrictMode>
      <AppRender />
    </React.StrictMode>
  </Provider>
);
