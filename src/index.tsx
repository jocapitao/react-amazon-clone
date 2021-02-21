import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { StateProvider } from "./contexts/StateProvider";
import reducer, { initialState } from "./reducers/reducer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
