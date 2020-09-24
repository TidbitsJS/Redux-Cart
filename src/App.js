import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";

import { createStore } from "redux";
import reducer from "./Container/Reducer";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
