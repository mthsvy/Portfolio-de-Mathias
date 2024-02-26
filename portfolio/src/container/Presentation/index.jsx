import Title from "../../components/Title";
import "./presentation.scss";
import portraitPresentation from "../../assets/Projects_pictures/portrait.jpg";
function Presentation() {
  return (
    <section className="presentation_font" id="presentation">
      <Title text="PRESENTATION" />
      <div className="portrait_description">
        <img src={portraitPresentation} alt="Portrait" />
        <section className="presentation_description">
          <p>
            Bonjour,
            <br /> Je suis un passionné d'informatique et je me suis lancé dans
            une formation d'intégrateur web il y a neuf mois.
            <br /> Mon parcours est axé sur l'apprentissage des compétences
            nécessaires pour devenir un intégrateur web compétent et polyvalent.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Presentation;
