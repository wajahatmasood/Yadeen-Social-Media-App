import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// through provider we can access redux in any component easily
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/index'
import './index.css'
// setting up redix
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
