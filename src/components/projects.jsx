import Cards from "../assets/images/Cards.png";
import Royal from "../assets/images/Royal.png";
import Ecom from "../assets/images/ecom.png";
export default function projects(){
    var proj = [
        {
            "img" :  Cards,
            "title" : "Memory Game",
            "description" : "cards memory game using html, css, JS",
            "link" : 'https://github.com/shlomi65436/Memory_Game',
            "prev" : 'https://xhalfon.github.io/Memory_Game/'

        },
        {
            "img": Ecom,
            "title" : "E-commerce",
            "description": "E-commerce project using MERN Stack",
            "link": 'https://github.com/shlomi65436/proShop',
            "prev": 'https://proshop-ppv0.onrender.com/'
        },
        {
            "img" :  Royal,
            "title" : "Royal Jewlery Shop",
            "description" : "Team project using html, css, JS, MongoDB, NodeJS",
            "link" : 'https://github.com/shlomi65436/Royal_Project',
            "prev" : 'https://royal-project.onrender.com/'

        }
    ];
    return(
        <div id="1">
            <h1 className="head">Projects</h1>
        <div className="container-proj">
            {proj.map((item) =>{
                return(
                    <span className="border-proj">
                        <img className="img-proj" src={item.img} alt="proj-img" />
                        <p className="title-proj">{item.title}</p>
                        <p className="description-proj">{item.description}</p>
                        <div className="btncont">
                        <button className="btn btn-glow btn-gradient btn-proj"><a className="aLive" href={item.prev} target="_blank" rel="noopener noreferrer">Live Preview</a></button>
                        <button className = "btn btn-proj"><a className="aGit" target = "_blank" rel="noopener noreferrer" href={item.link}>Check on GitHub</a></button>
                        </div>
                    </span>
                )
            })}
        </div>
        </div>
    );
}