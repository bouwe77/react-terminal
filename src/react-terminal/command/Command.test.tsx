import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, vi } from 'vitest'
import Command from './Command'

// Let op bij userEvent: iets invullen in een textbox doe je met type,
// maar een pijl omhoog/omlaag doe je met keyboard

describe('Command', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const validCommands = ['cmd1', '', ' ']

  test.each(validCommands)("When submitting valid command '%s', pass it to the callback", async (command) => {
    const { type, keyboard, click } = userEvent

    const onSubmitCommand = vi.fn()

    render(<Command onSubmitCommand={onSubmitCommand} />)

    const commandInput = screen.getByRole('textbox', { name: 'command' })

    // Type in the first command
    if (command) await type(commandInput, command)
    else await click(commandInput)
    expect(commandInput).toHaveValue(command)

    // Submit the command with enter
    await keyboard('[enter]')

    // The command should be passed to the callback
    expect(onSubmitCommand).toHaveBeenCalledOnce()
    expect(onSubmitCommand).toHaveBeenCalledWith(command)

    // The input should be cleared
    expect(commandInput).toHaveValue('')
  })

  test('history', async () => {
    const { type, keyboard, click } = userEvent

    const onSubmitCommand = vi.fn()

    render(<Command onSubmitCommand={onSubmitCommand} />)

    const commandInput = screen.getByRole('textbox', { name: 'command' })

    // Type in the first command
    await type(commandInput, 'cmd1')
    expect(commandInput).toHaveValue('cmd1')

    // When you press the up arrow, nothing should happen, the command should remain the same, because there is no history yet
    await keyboard('[up]')
    expect(commandInput).toHaveValue('cmd1')

    // Submit the command with enter
    await keyboard('[enter]')

    // Now rerender the component with history
    render(<Command onSubmitCommand={onSubmitCommand} history={['cmd1']} />)

    // The input is empty again
    expect(commandInput).toHaveValue('')

    // When you press the up arrow, the first command should appear
    await keyboard('[up]')
    expect(commandInput).toHaveValue('cmd1')

    // When you press the down arrow, the command should be cleared
    await keyboard('[down]')
    expect(commandInput).toHaveValue('')

    // Enter a new command
    await type(commandInput, 'cmd2')

    // When you press the up arrow, the first command should appear
    await keyboard('[up]')
    expect(commandInput).toHaveValue('cmd1')

    // When you press the down arrow, the second command should appear
    await keyboard('[down]')
    expect(commandInput).toHaveValue('cmd2')
  })
})
