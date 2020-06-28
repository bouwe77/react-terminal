import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";
import commands from "./commands";

const App = () => <Terminal commands={commands} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
