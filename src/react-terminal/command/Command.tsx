import { useRef } from 'react'

interface Props {
  onSubmitCommand: (command: string) => void
  history?: string[]
}

const Command = ({ onSubmitCommand, history = [] }: Props) => {
  const commandInputRef = useRef<HTMLInputElement>(null)

  const handleCommandSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!commandInputRef.current) return
    onSubmitCommand(commandInputRef.current.value)
    commandInputRef.current.value = ''
  }

  return (
    <form onSubmit={handleCommandSubmit}>
      <input aria-label="command" ref={commandInputRef} />
    </form>
  )
}

export default Command
