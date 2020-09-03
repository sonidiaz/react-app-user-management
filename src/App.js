import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRoute from "./route/routes";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
