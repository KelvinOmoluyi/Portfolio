import "@/app/css/index.css"
import "@/app/css/responsive.css"

// import { useContext } from "react";
import Home from "@/app/sections/index/Home";
import Navbar from "@/app/sections/index/Navbar";
import SideNavbar from "@/app/sections/index/SideNavbar";
// import ThemeContext from "../context/ThemeContext";
import Projects from "@/app/sections/index/Projects";
import About from "@/app/sections/index/About";
import Services from "@/app/sections/index/Services";
import Footer from "@/app/sections/index/Footer";

const Index = () => {
    // const {theme} = useContext(ThemeContext)

    return (
        <div>
            <Navbar />
            <SideNavbar />
            <Home />
            <Projects />
            <About />
            <Services />
            <Footer />
        </div>
    );
}
 
export default Index;