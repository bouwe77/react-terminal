const commands = [
  // Valid command: "hello"
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

  // Valid command: "no response"
  {
    expression: /no\sresponse/i,
    help: {
      example: 'no response',
      description: 'No response',
    },
    handle: () => {},
  },

  // Valid command: "go" with additional arguments, for example: "go west".
  {
    expression: /go\s(.*)/i,
    help: {
      example: 'go [direction]',
      description: 'Go to the specified [direction]',
    },
    handle: (command) => "OK, let's " + command,
  },
]

export default commands
