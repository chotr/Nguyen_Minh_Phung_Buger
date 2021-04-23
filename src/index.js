import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style";

// setup redux
import { createStore, applyMiddleware, compose } from "redux";
// kết nối react vs redux
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers/rootReducer";
//setup redux thunk - thư viện middleware của redux
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

// gộp middleware và redux devtool
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// tạo store từ reducer
const store = createStore(rootReducer, enhancer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
