import React, { useState } from "react";
import CommandLine from "./CommandLine";
import History from "./History";
import uuidv4 from "uuid/v4";

export default function Terminal({ commands }) {
  const [history, setHistory] = useState([]);

  function handleCommand(commandText) {
    const command = commands.find(
      command => command.text.toUpperCase() === commandText.toUpperCase()
    );
    let response;

    if (!command) response = "Invalid command.";
    else response = command.handle();

    setHistory([...history, { id: uuidv4(), command: commandText, response }]);
  }

  return (
    <>
      <History history={history} />
      <CommandLine handleCommand={handleCommand} />
    </>
  );
}
