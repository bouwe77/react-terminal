import React, { useState } from 'react'
import CommandLine from './CommandLine'
import History from './History'
import { v4 as uuidv4 } from 'uuid'

const Terminal = ({ commands }) => {
  const [history, setHistory] = useState([])

  const handleCommand = (commandText) => {
    const command = commands.find((command) => command.expression?.test(commandText))
    let response

    if (!command) response = 'Invalid command'
    else response = command.handle(commandText)

    setHistory([...history, { id: uuidv4(), command: commandText, response }])
  }

  return (
    <>
      <History history={history} />
      <CommandLine handleCommand={handleCommand} />
    </>
  )
}

export default Terminal
