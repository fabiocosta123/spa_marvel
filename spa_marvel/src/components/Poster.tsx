import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle
 } from "@fortawesome/free-solid-svg-icons"
import { Comic } from "./../data/mockData";

import Score from "./Score";

import "./Poster.css"

const Poster = ({ cover, title, score} : Comic, index: number) =>(
    <article className="relative transition-all duration-500 ease-in-out transform hover:scale-110" key={index}>
        <img src={cover} alt={title} />
        <div className="poster absolute cursor-pointer inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
            <FontAwesomeIcon icon={faPlayCircle} size="3x"/>
            <h2 className="text-2xl hover: z-10">{title}</h2>
            <Score value={score} />
        </div>
    </article>
    
)

export default Poster;