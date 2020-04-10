import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Terminal from "./Terminal";

const commands = [
  {
    text: "bouwe",
    handle: () =>
      "That's me! :) I am Bouwe, 42 years old, from Drachten, Netherlands. I am a software engineer.",
    description: "More about me."
  },
  {
    text: "contact",
    handle: () => "You can contact me on Twitter: @bouwe",
    description: "Ways to contact me."
  }
];

function getSpaces(howMany) {
  let spaces = [];
  for (let index = 0; index < howMany; index++) {
    spaces.push(<>&nbsp;</>);
  }
  return <>{spaces}</>;
}

function displayAllCommands() {
  return (
    <>
      <br />
      The following commands are available:
      <br />
      <br />
      {commands.map(command => (
        <>
          &nbsp; &nbsp;
          {command.text}
          {getSpaces(20 - command.text.length)}
          {command.description}
          <br />
        </>
      ))}
      <br />
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
