import { useEffect, useRef, useState } from 'react'
import './CommandLine.module.css'

const CommandLine = ({ handleCommand }) => {
  const [command, setCommand] = useState('')
  const inputRef = useRef(null)

  const handleCommandChange = (event) => {
    setCommand(event.target.value)
  }

  const handleCommandSubmit = (event) => {
    event.preventDefault()
    handleCommand(command)
    setCommand('')
  }

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  return (
    <>
      <div>
        <form onSubmit={handleCommandSubmit}>
          &gt; <input onChange={handleCommandChange} value={command} className="cursor" ref={inputRef} />
        </form>
      </div>
    </>
  )
}

export default CommandLine
