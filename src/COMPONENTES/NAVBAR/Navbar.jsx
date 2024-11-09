import "./Navbar.css"

export const NavBar = () => {

    return(
        <>
        <nav className = "navbar">
            <img className="logo" src="Imagenes\pokeapi_256.3fa72200.png" alt="Pokémon" />
            <ul className = "navbarlist">
                <li className="options">INICIO</li>
                <li className="options">POKÉDEX</li>
                <li className="options">EVENTOS</li>
            </ul>
        </nav>
        </>
    )
}