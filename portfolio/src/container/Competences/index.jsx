import Title from "../../components/Title";
import "./competence.scss";
import data from "../../data/projects.json";

function Competences() {
  return (
    <section id="competences">
      <Title text="COMPETENCES" />
      <article className="skills">
        {data.outils.map((outil) => (
          <div>
            <img
              src={require(`../../assets/Icon/${outil.logo}`)}
              alt={outil.name}
            />
          </div>
        ))}
      </article>
    </section>
  );
}

export default Competences;
