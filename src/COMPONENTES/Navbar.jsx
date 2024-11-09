import "./Navbar.css"

export const NavBar = () => {

    return(
        <>
        <nav class = "navbar">
            <img class="logo" src="Imagenes\pokeapi_256.3fa72200.png" alt="Pokémon" />
            <ul class = "navbarlist">
                <li class="options">INICIO</li>
                <li class="options">POKÉDEX</li>
                <li class="options">EVENTOS</li>
            </ul>
        </nav>
        </>
    )
}