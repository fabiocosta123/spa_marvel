import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faPlus} from "@fortawesome/free-solid-svg-icons"

import Score from  "./Score"

import placeholder from "../img/wallpaper.jpg"

import "./Hero.css";

const Hero = ({thumbnail = placeholder, title = "Comics" , score = 10}) => {
    
    return (
        <div>
            <header className="box-border relative min-h-screen -mb-64">
               <img className="object-cover object-center h-auto w-full" src= {thumbnail} alt="Marvel wallpaper"/>

                <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
                <article className="absolute bottom-0 mb-64 px-8">
                    <p className="text-3xl">Leia Agora</p>
                    <h2 className="text-6xl font-bold">{title}</h2>
                    <p className="text-base">
                        Nota {""}
                        <Score value= {score}/>
                    </p>
                    <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
                        <FontAwesomeIcon className="mr-2" icon={faPlay}/> Ler
                    </button>
                    <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
                        <FontAwesomeIcon className="mr-2" icon={faPlus}/> 
                        Minha Lista
                    </button>
                
                </article>
            
            </header>
           
        </div>
    )
}

export default Hero;