import React from "react";

//img
import logo from "../img/logo-marvel.png";
import placeholderUser from "../img/user.jpg";

const NavBar = () => (
    <nav className="absolute top-0 left-0 grid grid-cols-2 w-full p-8">
        <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
            <img src = {logo} alt="logo marvel" />
            <ul className="grid grid-flow-col gap-4">
            <li className="font-bold">Inicio</li>
            <li><a href="#comics">Quadrinhos</a></li>
            <li><a href="#movies">Filmes</a></li>
        </ul>
        </div>

        

        <div className="justify-self-end grid grid-cols-2 justify-items-end items-center">
            <form>
                <input type="text" placeholder="títulos, autor, gênero" />
                <button><i></i></button>
            </form>
            <div className="flex ml-4">
                <img src={placeholderUser} alt="Foto do usuário" />
                <button><i></i></button>
            </div>

            <ul className="hidden">
                <li><a href="#account">Minha Conta</a></li>
                <li><a href="#logout">Sair</a></li>
            </ul>
        </div>
    </nav>
)

export default NavBar;