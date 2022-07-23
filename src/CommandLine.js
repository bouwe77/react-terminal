import React, { useState } from 'react'
import './CommandLine.module.css'

export default ({ handleCommand }) => {
  const [command, setCommand] = useState('')

  function handleCommandChange(event) {
    setCommand(event.target.value)
  }

  function handleCommandSubmit(event) {
    event.preventDefault()
    handleCommand(command)
    setCommand('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleCommandSubmit}>
          &gt; <input onChange={handleCommandChange} value={command} className="cursor" />
        </form>
      </div>
    </>
  )
}
