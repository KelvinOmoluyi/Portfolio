import "../css/index.css"

// import { useContext } from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";
// import ThemeContext from "../context/ThemeContext";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";

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
            {/* <Footer /> */}
        </div>
    );
}
 
export default IndexPage;