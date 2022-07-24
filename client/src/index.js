import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import axios from "axios";

import AlertTemplate from "react-alert-template-basic";
import {positions,transitions,Provider as AlertProvider} from "react-alert";

axios.defaults.url="http://localhost:5000/";

const options={
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <AlertProvider template={AlertTemplate} {...options}> 
      <App />
      </AlertProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
