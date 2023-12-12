import Title from "../../components/Title";
import "./competence.scss";
import hmtlLogo from "../../assets/Icon/HTML.png";
import cssLogo from "../../assets/Icon/CSS.png";
import jsLogo from "../../assets/Icon/Js.png";
import sassLogo from "../../assets/Icon/sass.png";
import reactJsLogo from "../../assets/Icon/react.png";
import reduxLogo from "../../assets/Icon/redux.png";
import jestLogo from "../../assets/Icon/jest.svg";
import bootstrapLogo from "../../assets/Icon/bootstrap.png";

function Competences() {
  return (
    <section id="competences">
      <Title text="COMPETENCES" />
      <article className="skills">
        <div>
          <img src={hmtlLogo} alt="" />
        </div>
        <div>
          <img src={cssLogo} alt="" />
        </div>
        <div>
          <img src={bootstrapLogo} alt="" />
        </div>
        <div>
          <img src={sassLogo} alt="" />
        </div>
        <div>
          <img src={jsLogo} alt="" />
        </div>
        <div>
          <img src={reactJsLogo} alt="" />
        </div>
        <div>
          <img src={reduxLogo} alt="" />
        </div>
        <div>
          <img src={jestLogo} alt="" />
        </div>
      </article>
    </section>
  );
}

export default Competences;
