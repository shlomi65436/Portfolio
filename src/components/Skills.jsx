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
import docker from "../assets/images/docker.png"
import terraform from "../assets/images/terraform.png"
import aws from "../assets/images/aws.png"
import azure from "../assets/images/azure.png"

export default function Skills(){
    const imgs = [
        { name: "C Program", img: cProg },
        { name: "C++", img: cPlus },
        { name: "Java", img: java },
        { name: "Python", img: python },
        { name: "JavaScript", img: js },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "React", img: react },
        { name: "Node.js", img: node },
        { name: "SQL", img: sql },
        { name: "MongoDB", img: mongo },
        { name: "Git", img: git },
        { name: "GitHub", img: github },
        { name: "Linux", img: linux },
        { name: "AWS", img: aws },
        { name: "Azure", img: azure },
        { name: "Docker", img: docker },
        { name: "Terraform", img: terraform },
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
