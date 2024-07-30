import Navbar from "../navbar";
import Hello from "../Hello";
import Projects from "../projects";
import Footer from "../Footer";
import Skills from "../Skills";
import About from "../About";
import Arrow from "../Arrow";

export default function home(){
    return(
        <div>
        <Navbar/>
        <Arrow />
        <Hello />
        <Projects />
        <Skills />
        <About />
        <Footer />
        </div>

    );
}