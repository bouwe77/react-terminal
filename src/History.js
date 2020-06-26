import React from "react";

export default function History({ history }) {
  return (
    <>
      {history.map(h => (
        <div key={h.id}>
          <div>&gt; {h.command}</div>
          {h.response && <div>{h.response}</div>}
        </div>
      ))}
    </>
  );
}
