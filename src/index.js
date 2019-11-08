import React from "react";
import ReactDOM from "react-dom";

import Terminal from "./Terminal";

function handleCommand(command) {
  switch (command) {
    case "Wait, what? Is this a terminal built with React?":
      return "Yeah sure, why not?";
    case "That's pretty cool!":
      return "So is React! :)";
    default:
      return "Command not found";
  }
}

const App = () => <Terminal handleCommand={handleCommand} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
