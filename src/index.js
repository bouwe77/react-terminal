import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./styles.css";

function App() {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState("");

  function handleCommandChange(event) {
    setCommand(event.target.value);
  }

  function handleCommandSubmit(event) {
    event.preventDefault();
    setHistory([...history, { command, response: "..." }]);
    setCommand("");
  }

  return (
    <>
      {history.map(h => (
        <>
          {h.command}
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
