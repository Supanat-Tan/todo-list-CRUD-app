import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToDoProvider } from './context/ToDoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoProvider>
        <App />
    </ToDoProvider>
  </StrictMode>,
)
