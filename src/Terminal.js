import React, { useState } from 'react'
import CommandLine from './CommandLine'
import Help from './Help'
import History from './History'

const defaultHelpCommand = {
  name: 'help',
  expression: /help/i,
  help: {
    example: 'help',
    description: 'Show this help',
  },
}

const Terminal = ({ commands }) => {
  const [history, setHistory] = useState([])

  const helpCommand = {
    ...defaultHelpCommand,
    handle: () => {
      return <Help commands={commands} />
    },
  }

  const allCommands = [helpCommand, ...commands]

  const handleCommand = (commandText) => {
    const command = allCommands.find((command) => command.expression?.test(commandText))
    let response

    if (!command) response = 'Invalid command'
    else response = command.handle(commandText)

    setHistory([...history, { id: history.length + 1, command: commandText, response }])
  }

  return (
    <>
      <History history={history} />
      <CommandLine handleCommand={handleCommand} />
    </>
  )
}

export default Terminal
