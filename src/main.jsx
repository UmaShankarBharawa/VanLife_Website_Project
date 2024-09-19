import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from './server'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {makeServer()}
  </StrictMode>,
)
