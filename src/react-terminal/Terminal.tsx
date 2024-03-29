import { useState, useRef, useEffect } from 'react'
import Command from './command/Command'
import Help from './help/Help'
import History from './history/History'
import './styles.css'

const defaultHelpCommand = {
  expression: /help/i,
  help: {
    example: 'help',
    description: 'Show this help',
  },
}

const Terminal = ({ commands }) => {
  const [history, setHistory] = useState([])
  const bottomRef = useRef(null)

  const helpCommand = {
    ...defaultHelpCommand,
    handle: () => {
      return <Help commands={commands} />
    },
  }

  const allCommands = [...commands, helpCommand]

  const handleCommand = (commandText) => {
    const command = allCommands.find((command) => command.expression?.test(commandText))
    let response

    if (!command) response = 'Invalid command. Type "help" for all available commands.'
    else response = command.handle(commandText)

    setHistory([...history, { id: history.length + 1, command: commandText, response }])
  }

  useEffect(() => {
    if (!bottomRef.current) return
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  return (
    <>
      <History history={history} />
      <Command handleCommand={handleCommand} history={history} />
      <div ref={bottomRef} />
    </>
  )
}

export default Terminal
