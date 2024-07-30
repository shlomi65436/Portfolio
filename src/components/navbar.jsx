import img from "../assets/images/shlomibar.png";
import Git from "../assets/github";
import Linkedin from "../assets/linkedin";
import { Link, animateScroll as scroll } from 'react-scroll';
export default function navbar(){
    return(
        <div className="navbar">
          <img className="logo" src={img} alt="LOGO" />
        <ul>
           <li><Link className="active" to="1" spy={true} smooth={true} duration={500}>
        Projects
      </Link></li>
            <li><Link className="active" to="2" spy={true} smooth={true} duration={500}>
        Skills
      </Link></li>
            <li><Link className="active" to="3" spy={true} smooth={true} duration={500}>
        About
      </Link></li>
        </ul>
            <div>
                <span className="icons"><Linkedin /></span>
                <span className="icons"><Git /></span>
            </div>
        </div>
    );
}