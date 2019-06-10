import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

import { Provider } from "react-redux";

import store from "./config/store";
import Wrapper from "./components/wrapper";
import ReactToastify from "./components/ReactToastify";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <Wrapper />
        <ReactToastify />
      </div>
    </Provider>
  );
}

export default App;
