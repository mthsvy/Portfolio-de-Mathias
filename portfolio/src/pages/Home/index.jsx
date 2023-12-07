import "./home.scss";
import Nav from "../../components/Nav";
import Presentation from "../../container/Presentation";
import Projects from "../../container/Projects";
import Parcours from "../../container/Parcours";
import Competences from "../../container/Competences";
function Home() {
  return (
    <div>
      <Nav />
      <Presentation />
      <Projects />
      <Parcours />
      <Competences />
    </div>
  );
}

export default Home;
