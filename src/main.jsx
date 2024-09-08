import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlightSearch from './FlightSearch.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlightSearch />
  </StrictMode>,
)
