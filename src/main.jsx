import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Locations } from './pages/Locations/Locations'
import { Pokedex } from './pages/Pokedex/Pokedex'
import { Layaout } from './COMPONENTES/Layaout/Layaout'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'
import { SkillPage } from './pages/SkillPage/SkillPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layaout/>}>
        <Route path='' element={<Locations/>}/>
        <Route path='pokedex' element={<Pokedex/>}/>
        <Route path='pokemon/:id' element={<PokemonDetailPage/>}/>
        <Route path='pokemon/:id/skill/' element={<SkillPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
