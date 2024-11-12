import { NavLink, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"


export const SkillPage = () => {
    
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




    
    return<>
        <h1>Habilidades Pokémon</h1>
        <h4></h4>   
    </>

    }