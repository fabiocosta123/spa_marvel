
import placeholder from "../img/wallpaper.jpg"
import "./Hero.css";
const Hero = () => {
    
    return (
        <div>
            <header className="min-h-screen">
               <img className="object-cover object-center h-full" src= {placeholder} alt="Marvel wallpaper"/>
            </header>
            
        </div>
    )
}

export default Hero;