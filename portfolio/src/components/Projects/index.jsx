import Filter from "../Filter";
import Title from "../Title";
import "./projects.scss";

function Projects() {
  const filters = [];
  return (
    <section id="projects">
      <Title text="PROJETS" />
      <Filter />
      <ul id="projects_filter">
        {filters.map((filter) => (
          <Filter text={filter} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
