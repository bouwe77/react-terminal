import React, { useState } from "react";
import "./Terminal.module.css";

export default ({ handleCommand }) => {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState("");

  function handleCommandChange(event) {
    setCommand(event.target.value);
  }

  function handleCommandSubmit(event) {
    event.preventDefault();

    let response = handleCommand(command);
    if (!response) response = "invalid command";

    setHistory([...history, { command, response }]);
    setCommand("");
  }

  return (
    <>
      {history.map(h => (
        <>
          &gt; {h.command}
          <br />
          {h.response}
          <br />
        </>
      ))}

      <div>
        <form onSubmit={handleCommandSubmit}>
          &gt; <input onChange={handleCommandChange} value={command} />
        </form>
      </div>
    </>
  );
};
