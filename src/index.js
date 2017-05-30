import React from "react";
import ReactDOM from "react-dom";
import ExampleComponent from "./components/ExampleComponent";
import data from "./data";

const App = () => (
  <div>
    <ExampleComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
