import { useEffect, useState } from "react";
import "./Pokedex.css"
import { PokemonCard } from "../../COMPONENTES/PokemonCardComponetes/PokemonCard";



export const Pokedex = () => {
    const [PokeData,setPokeData] = useState(null)
    const [apiUrlPage, setApiUrlPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextUrlPage, setNextUrlPage] = useState(null)
    const [backUrlPage, setBackUrlPage] = useState(null)

    useEffect(() => {
        fetch(apiUrlPage).then((response) => {
            response.json().then((data) => {

            setPokeData(data)
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
    <header className="pokemonHeader">
    <h1 className="pokemonTitle">Datos de los Pokémon</h1>
    </header>
    <section>
        <button className="buttonBack" onClick= {BackPage}>Anterior</button>
        <button className="buttonNext" onClick={NextPage}>Siguiente</button>
    </section>
    <section>
        {PokeData !=null ? <> {
        PokeData.results.map((pokemon,index) => {
        return <PokemonCard key={index} name={pokemon.name} url={pokemon.url}/>
        })
        } </> : <p>Loading...</p>}
    </section>
    </>
)
}
