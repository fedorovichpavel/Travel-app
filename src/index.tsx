import React from "react";
import ReactDOM from "react-dom";

// import { Router } from "react-router-dom";
// import {createBrowserHistory} from 'history';

import "./Normalize.css";
import App from "./components/app/App";

// const history = createBrowserHistory();

// ReactDOM.render((
//   <Router history={history}>
//   <App />
//   </Router>
//   ), document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));
