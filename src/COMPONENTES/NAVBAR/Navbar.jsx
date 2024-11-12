import { NavLink } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {

    return(
        <>
        <nav className = "navbar">
            <img className="logo" src="https://pokeapi.co/static/pokeapi_256.3fa72200.png" alt="Pokémon" />
            <ul className = "navbarlist">
                <li className="options">INICIO</li>
                <NavLink to="/Pokedex">POKÉDEX</NavLink>
                <NavLink to= "/">CIUDADES</NavLink>
            </ul>
        </nav>
        </>
    )
}