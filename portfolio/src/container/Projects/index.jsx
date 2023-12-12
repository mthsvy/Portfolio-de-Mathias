import Filter from "../../components/Filter";
import Project from "../../components/Project";
import Title from "../../components/Title";
import "./projects.scss";
import data from "../../data/projects.json";
import { useState } from "react";

function Projects() {
  const [type, setType] = useState();
  const filteredProjects =
    (!type
      ? data?.projects
      : data?.projects.filter((project) => project.outils.includes(type))) ||
    [];
  const changeType = (evtType) => {
    setType(evtType);
  };

  const allOutils = data.projects.reduce((acc, project) => {
    project.outils.forEach((outil) => {
      acc.push(outil);
    });
    return acc;
  }, []);

  const mergedTools = [...new Set(allOutils)];

  return (
    <section id="projects">
      <Title text="PROJETS" />
      <Filter
        select={mergedTools}
        onChange={(value) => (value ? changeType(value) : changeType(null))}
      />
      <div className="projects_gallery">
        {filteredProjects.map((project) => (
          <Project
            key={project.name}
            data={project}
            tooltip={data.outils.filter((outil) =>
              project.outils.includes(outil.name)
            )}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
