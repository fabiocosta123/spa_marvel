import React, { useEffect, useState } from "react";

import axios from "axios";
import md5 from "md5"

//components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

// react-slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 //const baseURL = "https://gateway.marvel.com:443/v1/public";
 const ts = Number(new Date());
 const privateKey = "e404de82f7e2c4f95f89fdeb323754129fbc6228";
 const publicKey = "1958ce7ec28d260a9708f4547727812a";
 const hash = md5(ts + privateKey + publicKey);

 //(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
      
const App: React.FC = () => {

  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  },[]);
  
  
  return (
    <div className="m-auto antialiased font-sans text-center bg-black text-white">
      <Hero/>
      <NavBar />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
