import Cards from "../assets/images/Cards.png";
import Royal from "../assets/images/Royal.png";
export default function projects(){
    var proj = [
        {
            "img" :  Cards,
            "title" : "Memory Game",
            "description" : "cards memory game using html, css, JS"

        },
        {
            "img" :  Royal,
            "title" : "Royal Jewlery Shop",
            "description" : "E commeres project using html, css, JS, MongoDB, NodeJS"

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
                        <span>
                        <button className="btn btn-glow btn-gradient btn-proj">Live preview</button>
                        <button className="btn btn-proj">Check on github</button>
                        </span>
                    </span>
                )
            })}
        </div>
        </div>
    );
}