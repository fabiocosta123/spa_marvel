import React, { useState } from "react";

// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

//img
import logo from "../img/logo-marvel.png";
import placeholderUser from "../img/user.jpg";

import "./NavBar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCaretClick = () => {
        setMenuOpen(!menuOpen)
    }
    return (
         <nav className="navbar absolute top-0 left-0 grid grid-cols-2 w-full p-8">
        <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
            <img src = {logo} alt="logo marvel" />
            <ul className="grid grid-flow-col gap-4">
            <li className="font-bold">Inicio</li>
            <li><a href="#comics">Quadrinhos</a></li>
            <li><a href="#movies">Filmes</a></li>
        </ul>
        </div>

        

        <div className="justify-self-end grid grid-cols-2 justify-items-end items-center">
            <form className="relative w-64">
                <input className="w-full bg-black border border-white rounded px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100" type="text" placeholder="títulos, autor, gênero" />
                <button className="search absolute right-0 px-2 " onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="relative flex ml-4">
                <img src={placeholderUser} alt="Foto do usuário" onClick={handleCaretClick} />
                <button className="ml-4" onClick={handleCaretClick}>
                    <FontAwesomeIcon  icon={faCaretDown} />
                </button>

                <ul className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-3 transition-all duration-300 ease-in-out ${!menuOpen && "opacity-0 invisible"}`}>
                    <li><a href="#account">Minha Conta</a></li>
                    <li><a href="#logout">Sair</a></li>
                </ul>
            </div>

            
        </div>
    </nav>
    )
   
}

export default NavBar;