import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";

const commands = [
  // Valid command: "hello"
  {
    expression: /hello/i,
    handle: () => "Hello to you too :)"
  },
  // Valid command: "no response"
  { expression: /no\sresponse/i, handle: () => {} },
  // Valid command: "go" with additional arguments, for example: "go west".
  { expression: /go\s(.*)/i, handle: command => "OK, " + command }
];

const App = () => <Terminal commands={commands} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
