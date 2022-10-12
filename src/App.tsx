import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "../../DB2aaS/src/components/counter";

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <div>Name: XaaS</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
