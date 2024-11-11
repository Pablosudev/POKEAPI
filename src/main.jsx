import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Locations } from './pages/Locations/Locations'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Locations/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
