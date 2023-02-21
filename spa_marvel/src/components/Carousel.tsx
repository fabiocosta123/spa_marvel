import React from "react";

import Slick from "react-slick";

import mockData, { Comic } from "../data/mockData";

const Poster = ({ cover, title} : Comic, index: number) =>(
    <article key={index}>
        <img src={cover} alt={title} />
    </article>
)

interface CarouselData {
    title?: string;
    data?: Comic[];
}
const Carousel = ({ title = "Carousel", data = mockData}: CarouselData) => {

    const options = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 10,
        vaiableWidth: true

    }
    return (
        <section>
            <h2>{title}</h2>
            <Slick {...options}>
                {data.map((comic, index) => Poster(comic, index))}
            </Slick>
        </section>
    )

}



export default Carousel;