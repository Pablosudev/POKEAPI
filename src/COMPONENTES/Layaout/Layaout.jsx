import { Outlet } from "react-router-dom";
import { NavBar } from "../NAVBAR/Navbar";

export const Layaout = () => {


    return(
        <>
        <NavBar/>
        <Outlet/>
        <footer>
            <p>C@ Pablito</p>
        </footer>
        </>
    )
}