import React, { useState } from 'react'
import './CommandLine.module.css'

const CommandLine = ({ handleCommand }) => {
  const [command, setCommand] = useState('')

  const handleCommandChange = (event) => {
    setCommand(event.target.value)
  }

  const handleCommandSubmit = (event) => {
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

export default CommandLine
