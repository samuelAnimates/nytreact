import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//access environmental variables for username, password, host
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById("root"));
