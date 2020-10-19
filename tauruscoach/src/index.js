import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./client/store/configureStore";

import App from "./App";
import { startGetUser } from "./client/actions/userAction";

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

if (localStorage.getItem("authToken")) {
  console.log("authtoken");
  store.dispatch(startGetUser());
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  jsx,

  document.getElementById("root")
);
