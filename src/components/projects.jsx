import Cards from "../assets/images/Cards.png";
import Royal from "../assets/images/Royal.png";
import Ecom from "../assets/images/ecom.png";

export default function Projects() {
  const proj = [
    {
      img: Cards,
      title: "Memory Game",
      description: "A memory card game built with HTML, CSS, and JavaScript.",
      link: "https://github.com/shlomi65436/Memory_Game",
      prev: "https://xhalfon.github.io/Memory_Game/",
    },
    {
      img: Ecom,
      title: "E-commerce",
      description: "An end-to-end e-commerce platform built with the MERN stack.",
      link: "https://github.com/shlomi65436/proShop",
      prev: "https://proshop-ppv0.onrender.com/",
    },
    {
      img: Royal,
      title: "Royal Jewelry Shop",
      description:
        "A team project featuring a jewelry shop website built with HTML, CSS, JavaScript, MongoDB, and Node.js.",
      link: "https://github.com/shlomi65436/Royal_Project",
      prev: "https://royal-project.onrender.com/",
    },
  ];

  return (
    <div id="1">
      <h1 className="head">Projects</h1>
      <div className="container-proj">
        {proj.map((item) => (
          <div key={item.title} className="border-proj">
            <img className="img-proj" src={item.img} alt={`${item.title} preview`} />
            <p className="title-proj">{item.title}</p>
            <p className="description-proj">{item.description}</p>
            <div className="btncont">
              <button className="btn btn-glow btn-gradient btn-proj">
                <a
                  className="aLive"
                  href={item.prev}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </button>
              <button className="btn btn-proj">
                <a
                  className="aGit"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check on GitHub
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
