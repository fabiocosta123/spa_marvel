import React from "react";

import Slick from "react-slick";

import mockData, { Comic } from "../data/mockData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";
import Poster from "./Poster";

interface CarouselData {
    title?: string;
    data?: Comic[];
}
const Carousel = ({ title = "Comics em Destaque", data = mockData}: CarouselData) => {
    enum Direction {
        left, 
        right, 
    }
    const SlickArrow = ({ 
        direction, onClick,
    }:  {
        direction: Direction; onClick?: () => void;
    }) => (
        <button 
        type="button" 
        className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${
            direction ? "right-0" : "left-0"}`} 
            onClick={onClick}
        >
            <FontAwesomeIcon 
                icon={direction ? faChevronRight : faChevronLeft}
                size="2x"/>
        </button>
    )

    const options = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 9,
        vaiableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left}/>,
        nextArrow: <SlickArrow direction={Direction.right} />

    }
    return (
        <section className="carousel">
            <h2 className="relative z-10 font-bold text-2xl ml-8 mb-2">{title}</h2>
            <Slick className="relative mb-4" {...options}>
                {data.map((comic, index) => Poster(comic, index))}
            </Slick>
        </section>
    )

}



export default Carousel;