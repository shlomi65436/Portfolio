import img from "../assets/images/coolPic.png";
import cv from '.../public/pdfs/CV.pdf';
export default function Hello(){
    return(
        <div className="Hello">
            <span className="leftSec">
                <p className="Shlomi">Hello, I'm Shlomi</p> <span className="wave" style={{background: 'none'}}>👋</span>
                <p className="Welcome">Welcome to my portfolio </p>
                <p className="Student animated-text"> Software Engineer</p>
                <a className="btn-glow btn btn-gradient" href={cv} download="CV.pdf">Download CV</a>
            </span>
            <span className="rightSec">

            <img src={img} alt="CoolPic" width="300px" />


            </span>
        
        
        
        
        </div>
    );
}