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
    const imgs = [
        { name: "C Program", img: cProg },
        { name: "C++", img: cPlus },
        { name: "Git", img: git },
        { name: "GitHub", img: github },
        { name: "Java", img: java },
        { name: "JavaScript", img: js },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "Linux", img: linux },
        { name: "MongoDB", img: mongo },
        { name: "React", img: react },
        { name: "Node.js", img: node },
        { name: "Python", img: python },
        { name: "SQL", img: sql }
    ];

    return(
        <div id="2">
            <h1 className="head">Skills and Technologies</h1>
            <div className="container-skill">
                {imgs.map((item, idx) => (
                    <div key={idx} className="border-skill">
                        <img className="img-skill" src={item.img} alt={item.name} />
                        <p className="skill-name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
