import "../css/index.css"
import "../css/responsive.css"

// import { useContext } from "react";
import Home from "../sections/index/Home";
import Navbar from "../sections/index/Navbar";
import SideNavbar from "../sections/index/SideNavbar";
// import ThemeContext from "../context/ThemeContext";
import Projects from "../sections/index/Projects";
import About from "../sections/index/About";
import Services from "../sections/index/Services";
import Footer from "../sections/index/Footer";

const IndexPage = () => {
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
 
export default IndexPage;