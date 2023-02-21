import React from "react";

//components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

// react-slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="m-auto antialiased font-sans text-center bg-black text-white">
      <Hero />
      <NavBar />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
