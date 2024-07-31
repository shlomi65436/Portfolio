import Navbar from "../navbar";
import Hello from "../Hello";
import Footer from "../Footer";
import Arrow from "../Arrow";
import Projects from "../projects";
import Skills from "../Skills";
import About from "../About";
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