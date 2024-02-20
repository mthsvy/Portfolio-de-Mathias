import "./project.scss";

function Project({ data, tooltip }) {
  return (
    <div className="project">
      <article className="card">
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
    </div>
  );
}

export default Project;
