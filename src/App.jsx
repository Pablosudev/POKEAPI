import"./app.css" ;
import { NavBar } from './COMPONENTES/NAVBAR/Navbar'
import { CitySearch } from "./COMPONENTES/SEARCHCITY/CitySearchComponent";


function App() {
  

  return (
   <>
   <header className="header">
    <NavBar/>
    <section className ="header__section">
    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokeapi" />
    <h2>LA NUEVA API DE POKéMON</h2>
    <p>Descubre todos los datos del mundo Pokémon</p>
    </section>
   </header>
   <section>
    <CitySearch/>
   </section>
   </>
  )
}

export default App
