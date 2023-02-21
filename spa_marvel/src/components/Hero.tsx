import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faPlus} from "@fortawesome/free-solid-svg-icons"

import placeholder from "../img/wallpaper.jpg"

import "./Hero.css";

const Hero = ({title = "Comics Marvel", score = 10}) => {
    const getBorderColor = () => {
        if(score >= 7){
            return "border-green-400";
        }else if(score > 4 && score < 7){
            return "border-yellow-400";
        }else {
            return "border-red-400";
        }
    }
    return (
        <div>
            <header className="relative min-h-screen -mb-64">
               <img className="object-cover object-center h-full" src= {placeholder} alt="Marvel wallpaper"/>

                <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
                <article className="absolute bottom-0 py-64 px-8">
                    <p className="text-1xl">Leia Agora</p>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-base">Nota <span className={`inline-block mx-2 py-1 px-2 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>{score}</span></p>
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