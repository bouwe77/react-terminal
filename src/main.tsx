import React from 'react'
import ReactDOM from 'react-dom/client'
import Terminal from './react-terminal'
import commands from './commands'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Terminal commands={commands} />
  </React.StrictMode>,
)
