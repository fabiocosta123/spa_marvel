import React from "react";

//components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="m-auto antialiased font-sans text-center bg-black text-white">
      <Hero />
      <NavBar />
    </div>
  );
}

export default App;
