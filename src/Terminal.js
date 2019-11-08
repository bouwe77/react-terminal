import React, { useState } from "react";
import "./Terminal.module.css";
import uuidv4 from "uuid/v4";

export default ({ handleCommand }) => {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState("");

  function handleCommandChange(event) {
    setCommand(event.target.value);
  }

  function handleCommandSubmit(event) {
    event.preventDefault();

    let response = handleCommand(command);

    setHistory([...history, { id: uuidv4(), command, response }]);
    setCommand("");
  }

  const Command = ({ command }) => <div>&gt; {command}</div>;

  const Response = ({ response }) => (response ? <div>{response}</div> : null);

  return (
    <>
      {history.map(h => (
        <div key={h.id}>
          <Command command={h.command} />
          <Response response={h.response} />
        </div>
      ))}

      <div>
        <form onSubmit={handleCommandSubmit}>
          &gt; <input onChange={handleCommandChange} value={command} />
        </form>
      </div>
    </>
  );
};
