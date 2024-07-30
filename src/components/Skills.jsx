import mongo from "../assets/images/mongo.png"
import cProg from "../assets/images/cProg.png"
import cPlus from "../assets/images/c++.png";
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import sql from "../assets/images/sql.png"
import java from "../assets/images/java.png"
import js from "../assets/images/js.png"
import python from "../assets/images/python.png"
import linux from "../assets/images/linux.png"
import react from "../assets/images/react.png"
import node from "../assets/images/node.png"

export default function Skills(){
    var imgs = [
        {
            "name" : "cProg",
            "img" : cProg
        },
        {
            "name" : "c++",
            "img" : cPlus
        },
        {
            "name" : "git",
            "img" : git
        },
        {
            "name" : "github",
            "img" : github
        },
        {
            "name" : "java",
            "img" : java
        },
        {
            "name" : "js",
            "img" : js
        },
        {
            "name" : "html",
            "img" : html
        },
        {
            "name" : "css",
            "img" : css
        },
        {
            "name" : "linux",
            "img" : linux
        },
        {
            "name" : "mongo",
            "img" : mongo
        },
        {
            "name" : "react",
            "img" : react
        },
        {
            "name" : "node",
            "img" : node
        },
        {
            "name" : "python",
            "img" : python
        },
        {
            "name" : "sql",
            "img" : sql
        }
    ];
    return(
        <div id="2"> <h1 className="head">Skills and Technologies</h1>
        <div className="cont">
        <div className="container-skill">
            {imgs.map( (item) => {
                return (
                    <div className="border-skill">
                        <img className="img-skill" src={item.img} alt={item.name} />
                    </div>
                );
            })}
        </div>
        </div>
        </div>
    );
}