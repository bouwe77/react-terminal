import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";

function handleCommand(command) {
  switch (command) {
    case "?":
      return "The following commands are supported: hello, moio and miep";
    case "hello":
      return "Yeah, hello to you too :)";
    case "moio":
      return "Ja moi ee'm";
    case "miep":
      return "Kees en Miep";
    default:
      return "Command not found";
  }
}

const App = () => <Terminal handleCommand={handleCommand} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
