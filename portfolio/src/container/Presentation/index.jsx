import Title from "../../components/Title";
import "./presentation.scss";
import portraitPresentationLarge from "../../assets/Projects_pictures/Photos_de_moi.jpg";

function Presentation() {
  return (
    <section className="presentation_font" id="presentation">
      <Title text="PRESENTATION" />
      <div className="portrait_description">
        <img
          src={portraitPresentationLarge}
          sizes="(min-width: 840px) 400px, 48.08vw"
          alt="Portrait"
          loading="eager"
        />
        <section className="presentation_description">
          <p>
            Bonjour, <br />
            Je vous invite à découvrir mon portfolio, issu de neuf mois
            d'apprentissage dédiés à l'intégration web. <br /> Vous y trouverez
            mes réalisations, témoignant de mon évolution et de mon savoir-faire
            dans ce domaine. <br /> Je suis convaincu que mon portfolio saura
            illustrer de manière simple et efficace mes compétences en
            intégration web. <br /> <br /> Mathias Villy
          </p>
        </section>
      </div>
    </section>
  );
}

export default Presentation;
