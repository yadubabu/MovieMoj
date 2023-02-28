import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers/rootReducer";

const middleWare = { thunk };

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
