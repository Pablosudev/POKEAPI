import { useEffect, useState } from "react";
import"./app.css" ;
import { CardsCity } from "../../COMPONENTES/CardsComponentes/CardsCityComponents";
import { NavBar } from "../../COMPONENTES/NAVBAR/Navbar";
import { CitySearch } from "../../COMPONENTES/SEARCHCITY/CitySearchComponent";



export const Locations = () => {
  
  const [apiData,setApiData] = useState(null)
  const [apiUrlPage, setApiUrlPage] = useState("https://pokeapi.co/api/v2/location/")
  const [nextUrlPage, setNextUrlPage] = useState(null)
  const [backUrlPage, setBackUrlPage] = useState(null)

  useEffect(() => {
    fetch(apiUrlPage).then((response) => {
        response.json().then((data) => {

          setApiData(data)
          setNextUrlPage(data.next)
          setBackUrlPage(data.previous)
        })
    })
},[apiUrlPage])


  const NextPage = () => {
    setApiUrlPage(nextUrlPage)
  }

  const BackPage = () => {
    setApiUrlPage(backUrlPage)
  }

  return (
   <>
   <header className="header">
    <NavBar/>
    <section className ="header__section">
    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokeapi" />
    <h2 className="titledate">LA NUEVA API DE POKéMON</h2>
    <p className="date">Descubre todos los datos del mundo Pokémon</p>
    </section>
   </header>
   <section>
    <CitySearch apiData={apiData}/>
   </section>
   <section>
    <button onClick= {BackPage}>Anterior</button>
    <button onClick={NextPage}>Siguiente</button>
   </section>
   <section>
    {apiData !=null ? <> {
      apiData.results.map((city,index) => {
      return <CardsCity key={index} name={city.name} url={city.url}/>
    })
    } </> : <p>Loading...</p>}
   </section>
   </>
  )
}


