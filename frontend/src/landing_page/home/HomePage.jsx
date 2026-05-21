import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Eduaction from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage(){
    return(
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Eduaction/>
        <OpenAccount/>
        </>
    );
}

export default HomePage;