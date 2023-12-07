import "./project.scss";
import image from "../../assets/abajour-tahina1651286843956222.png";
import htmlLogo from "../../assets/Icon/HTML.png";
import cssLogo from "../../assets/Icon/CSS.png";
import Collapse from "../Collapse";

function Project() {
  return (
    <div>
      <article className="picture_project">
        <div className="tooltip-container">
          <img src={image} alt="" />
          <span className="tooltip-text">
            <img src={htmlLogo} alt="" />
            <img src={cssLogo} alt="" />
          </span>
        </div>

        <div className="icon_project">
          <span className="giticon_project">
            <a href="https://github.com/mthsvy/Projet_Java_script_ArchiWebos.git">
              <i className="fab fa-github"></i>
            </a>
          </span>

          <span className="giticon_project">
            <a href=".">
              <i className="fas fa-globe"></i>
            </a>
          </span>
        </div>
      </article>
      <div className="description_project">
        <Collapse label="Titre du projet" description="description du projet" />
      </div>
    </div>
  );
}

export default Project;
