const commands = [
  // The "hello" command is the simplest command: It just prints a message.
  // It does not have arguments and does nothing with the given command.
  {
    expression: /hello/i,
    help: {
      example: 'hello',
      description: 'Say hello to the terminal',
    },
    handle: () => {
      return 'Hello to you too :)'
    },
  },

  // The "no response" command does not write a response to the terminal.
  {
    expression: /no\sresponse/i,
    help: {
      example: 'no response',
      description: 'No response',
    },
    handle: () => {},
  },

  // The "go" command supports arguments, which are just being printed,
  // but you could do something with it.
  {
    expression: /go\s(.*)/i,
    help: {
      example: 'go [direction]',
      description: 'Go to the specified [direction]',
    },
    handle: (command) => "OK, let's " + command,
  },

  // The "yolo" command is a command that does not have a help text.
  {
    expression: /yolo/i,
    handle: () => 'YOLO',
  },
]

export default commands
