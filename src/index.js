import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";

const commands = [
  {
    text: "bouwe",
    handle: () =>
      "That's me! :) I am Bouwe, 42 years old, from Drachten, Netherlands. I am a software engineer."
  },
  {
    text: "contact",
    handle: () => "You can contact me on Twitter: @bouwe"
  },
  { text: "niks", handle: () => {} }
];

function handleCommand(text) {
  const command = commands.find(command => command.text.toUpperCase() === text.toUpperCase());
  if (!command) return "Invalid command.";

  return command.handle();
}

const App = () => <Terminal handleCommand={handleCommand} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
