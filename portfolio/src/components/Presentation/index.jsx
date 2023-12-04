import Title from "../Title";
import "./presentation.scss";
function Presentation() {
  return (
    <section className="presentation_align" id="presentation">
      <Title text="PRESENTATION" />
      <article className="presentation_description">
        Bonjour,
        <br /> Je suis un passionné d'informatique et je me suis lancé dans une
        formation{" "}
        <strong>
          <i>d'intégrateur web</i>
        </strong>{" "}
        il y a neuf mois.
        <br /> Mon parcours est axé sur l'apprentissage des compétences
        nécessaires pour devenir un intégrateur web{" "}
        <strong>
          {" "}
          <i>compétent</i>
        </strong>{" "}
        et
        <strong>
          {" "}
          <i>polyvalent</i>
        </strong>
        .
      </article>
    </section>
  );
}

export default Presentation;
