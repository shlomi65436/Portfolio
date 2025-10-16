import img from "../assets/images/shlomibar.png";
import Git from "../assets/github";
import Linkedin from "../assets/linkedin";
import { Link } from 'react-scroll';
import { useState } from "react";
export default function Navbar(){
    const [close,setClose] = useState(true);
    const [isopen,setOpen] = useState('nav-links-close');
    function handleNav(){
        if(isopen === 'nav-links-close'){
            setOpen("nav-links-close nav-links-open");
            setClose(!close);
        }
        else{
            setOpen('nav-links-close');
            setClose(!close);
        }
    }
    return(
        <section>
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
        <div className="navbar-phone">
            <img className="logo" src={img} alt="LOGO" />
                <span onClick={handleNav} className="open-nav">
                    {close ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
                </span>
        </div>
        <center>
        <div className={isopen}>
        <li><Link className="active" to="1" spy={true} smooth={true} duration={500}>
        Projects
      </Link></li>
            <li><Link className="active" to="2" spy={true} smooth={true} duration={500}>
        Skills
      </Link></li>
            <li><Link className="active" to="3" spy={true} smooth={true} duration={500}>
        About
      </Link></li>

        </div>
        </center>
        </section>
    );
}