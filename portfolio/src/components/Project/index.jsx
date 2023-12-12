import "./project.scss";
import Collapse from "../Collapse";

function Project({ data, tooltip }) {
  return (
    <div className="project">
      <article className="picture_project">
        <div className="tooltip-container">
          <img
            src={require(`../../assets/Projects_pictures/${data.image}`)}
            alt={data.name}
          />
          <span className="tooltip-text">
            {tooltip.map((tooltip) => (
              <img
                key={tooltip.name}
                src={require(`../../assets/Icon/${tooltip.logo}`)}
                className="tooltip-img"
                alt={tooltip.name}
              />
            ))}
          </span>

          <div className="icon_project">
            <span className="giticon_project">
              <a href={data.github} target="blank">
                <i className="fab fa-github"></i>
              </a>
            </span>

            <span className="giticon_project">
              <a href={data.site_web} target="blank">
                <i className="fas fa-globe"></i>
              </a>
            </span>
          </div>
        </div>
      </article>
      <Collapse label={data.name} description={data.description} />
    </div>
  );
}

export default Project;
