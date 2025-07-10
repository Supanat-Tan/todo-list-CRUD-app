import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToDoProvider } from './context/ToDoProvider.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToDoProvider>
          <App />
      </ToDoProvider>
    </AuthProvider>
  </StrictMode>,
)
