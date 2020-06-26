import React from "react";

export default function History({ history }) {
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
    </>
  );
}
