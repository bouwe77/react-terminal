const History = ({ history }) => {
  return (
    <>
      {history.map((h) => (
        <div key={h.id}>
          <div>&gt; {h.command}</div>
          {h.response && <div>{h.response}</div>}
        </div>
      ))}
    </>
  )
}

export default History
