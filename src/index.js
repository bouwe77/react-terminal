import { createRoot } from 'react-dom/client'
import Terminal from './react-terminal'
import commands from './commands'

const App = () => <Terminal commands={commands} />

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
