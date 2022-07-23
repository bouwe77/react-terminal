import { createRoot } from 'react-dom/client'
import './styles.css'
import Terminal from './Terminal'
import commands from './commands'

const container = document.getElementById('root')
const root = createRoot(container)
const App = () => <Terminal commands={commands} />
root.render(<App />)
