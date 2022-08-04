import { useEffect, useRef, useState } from 'react'
import './Command.module.css'

const Command = ({ handleCommand, history }) => {
  const [localHistory, setLocalHistory] = useState(null)

  useEffect(() => {
    setLocalHistory({
      index: history.length,
      commands: [...history.map((h) => h.command), ''],
    })
  }, [history])

  const inputRef = useRef(null)

  const handleCommandChange = (event) => {
    const updatedCommands = [...localHistory.commands]
    updatedCommands[localHistory.index] = event.target.value
    setLocalHistory((prev) => ({
      ...prev,
      commands: updatedCommands,
    }))
  }

  const handleCommandSubmit = (event) => {
    event.preventDefault()
    handleCommand(localHistory.commands[localHistory.index])
  }

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowUp') {
      let newIndex = localHistory.index
      if (newIndex > 0) {
        newIndex--
        setLocalHistory((prev) => ({
          ...prev,
          index: newIndex,
        }))
      }
    } else if (event.key === 'ArrowDown') {
      let newIndex = localHistory.index
      if (newIndex < localHistory.commands.length - 1) {
        newIndex++
        setLocalHistory((prev) => ({
          ...prev,
          index: newIndex,
        }))
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
