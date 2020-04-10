import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";

const commands = [
  {
    text: "hello",
    handle: () => "Hello to you too :)"
  },
  {
    text: "moio",
    handle: () => "Ah goeie!"
  },
  {
    text: "hondenskront",
    handle: () => "is vies"
  }
];

function displayAllCommands() {
  return (
    <>
      The following commands are available:
      <br />
      <br />
      {commands.map(command => (
        <>
          &nbsp; &nbsp;
          {command.text}
          <br />
        </>
      ))}
    </>
  );
}

function handleCommand(text) {
  if (text === "?" || text === "help") return displayAllCommands();

  const command = commands.find(command => command.text === text);
  if (!command) return "Invalid command.";

  return command.handle();
}

const App = () => <Terminal handleCommand={handleCommand} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
