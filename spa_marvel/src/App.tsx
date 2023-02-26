import React, { useEffect, useState } from "react";

import Comics from "./Characteres/Comics";

//components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

// react-slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 
      
const App: React.FC = () => {

 
  
  
  return (
    <div className="m-auto antialiased font-sans text-center bg-black text-white">
      <Hero/>
      <NavBar />
      <Carousel />
      <Carousel />
      <Comics />
    </div>
  );
}

export default App;
