import React from "react";
import ReactDOM from "react-dom";

import "./Normalize.css";
import App from "./components/app/App.js";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducer/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
