import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "./index.css";
import "./reset.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
