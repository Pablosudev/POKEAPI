import { NavLink, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"


export const PokemonDetailPage = () => {
    const {id} = useParams()
    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded,setIsInformationLoaded] = useState(false)


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
            response.json().then((data) => {
    
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    },[])

    
    

    
    return <article>
        {isInformationLoaded === true ? <>
        <h4>{pokemonInformation.name}</h4>
        <img src={pokemonInformation.sprites.front_default} />
        <img src={pokemonInformation.sprites.back_default} />
        <img src={pokemonInformation.sprites.front_shiny} />
        <img src={pokemonInformation.sprites.back_shiny} />
        <NavLink to={`/pokemon/${id}/skill`}>HABILIDADES</NavLink>
        </> : <p>Loading ...</p>}
    </article>
    
}