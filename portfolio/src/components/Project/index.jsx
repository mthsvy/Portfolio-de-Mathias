import React, { useState } from "react";
import "./project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ data, tooltip }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".project")) {
      setIsFlipped(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`project ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card">
        <div className="container card_front">
          <img
            src={require(`../../assets/Projects_pictures/${data.image}`)}
            sizes="480px"
            alt={data.name}
          />
        </div>
        <div className="container card_back">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <div className="tooltip">
            {tooltip.map((tooltip) => (
              <img
                key={tooltip.name}
                src={require(`../../assets/Icon/${tooltip.logo}`)}
                className="tooltip_img"
                alt={tooltip.name}
              />
            ))}
          </div>
          <div className="icon_project">
            <span className="giticon_project">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>

            <span className="giticon_project">
              <a
                href={data.site_web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site Webs"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
