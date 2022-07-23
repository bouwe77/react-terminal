const commands = [
  // Valid command: "hello"
  {
    expression: /hello/i,
    handle: () => {
      return 'Hello to you too :)'
    },
  },

  // Valid command: "no response"
  { expression: /no\sresponse/i, handle: () => {} },

  // Valid command: "go" with additional arguments, for example: "go west".
  { expression: /go\s(.*)/i, handle: (command) => 'OK, ' + command },
]

export default commands
