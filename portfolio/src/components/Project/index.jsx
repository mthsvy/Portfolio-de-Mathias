import React, { useState } from "react";
import "./project.scss";

function Project({ data, tooltip }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`project ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card">
        <div className="container card_front">
          <img
            src={require(`../../assets/Projects_pictures/${data.image}`)}
            alt={data.name}
          />
        </div>
        <div className="container card_back">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <span className="tooltip">
            {tooltip.map((tooltip) => (
              <img
                key={tooltip.name}
                src={require(`../../assets/Icon/${tooltip.logo}`)}
                className="tooltip_img"
                alt={tooltip.name}
              />
            ))}
          </span>
          <div className="icon_project">
            <span className="giticon_project">
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </span>

            <span className="giticon_project">
              <a href={data.site_web} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
