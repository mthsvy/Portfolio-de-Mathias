import Filter from "../../components/Filter";
import Project from "../../components/Project";
import Title from "../../components/Title";
import "./projects.scss";

function Projects() {
  return (
    <section id="projects">
      <Title text="PROJETS" />
      <Filter />
      <div className="projects_gallery">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
