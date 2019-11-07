import React from "react";
import ReactDOM from "react-dom";

import Terminal from "./Terminal";

function handleCommand(command) {
  if (command === "hoi") return "ook hoi";
  return null;
}

const App = () => <Terminal handleCommand={handleCommand} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
