import { useEffect } from "react"
import { useState } from "react"
import "./PokemonCard.css"
import { NavLink } from "react-router-dom"

export const PokemonCard = (props) => {


    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded,setIsInformationLoaded] = useState(false)

    useEffect(() => {
        fetch(props.url).then((response) => {
            response.json().then((data) => {
    
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    },[pokemonInformation])


    return <>
    {isInformationLoaded ? <article className="PokemonCard">
        <img src={pokemonInformation.sprites.front_default}/>
            <h4>{props.name}</h4>
            <NavLink to={`/pokemon/${pokemonInformation.id}`} >Más información</NavLink>
        </article> : <p>Loading ...</p>
    }
    </>
}