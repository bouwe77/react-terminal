import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import './Command.module.css'

interface CommandProps {
  handleCommand: (command: string) => void
  history: string[]
}

interface Blah {
  index: number
  commands: string[]
}

const Command = ({ handleCommand, history }: CommandProps) => {
  const [localHistory, setLocalHistory] = useState<Blah>({ index: 0, commands: [] })

  useEffect(() => {
    setLocalHistory({
      index: history.length,
      commands: [...history, ''],
    })
  }, [history])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommandChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!localHistory) return
    const updatedCommands = [...localHistory.commands]
    updatedCommands[localHistory.index] = event.target.value
    setLocalHistory((prev) => {
      return {
        ...prev,
        commands: updatedCommands,
      }
    })
  }

  const handleCommandSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!localHistory) return
    handleCommand(localHistory.commands[localHistory.index])
  }

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!localHistory) return
    if (event.key === 'ArrowUp') {
      let newIndex = localHistory.index
      if (newIndex > 0) {
        newIndex--
        setLocalHistory((prev) => {
          return {
            ...prev,
            index: newIndex,
          }
        })
      }
    } else if (event.key === 'ArrowDown') {
      let newIndex = localHistory.index
      if (newIndex < localHistory.commands.length - 1) {
        newIndex++
        setLocalHistory((prev) => {
          return {
            ...prev,
            index: newIndex,
          }
        })
      }
    }
  }

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
    inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length
  }, [])

  if (!localHistory) return null

  return (
    <>
      <div>
        <form onSubmit={handleCommandSubmit}>
          &gt;{' '}
          <input
            onChange={handleCommandChange}
            onKeyUp={handleKeyUp}
            value={localHistory.commands[localHistory.index]}
            className="cursor"
            ref={inputRef}
          />
        </form>
      </div>
    </>
  )
}

export default Command
