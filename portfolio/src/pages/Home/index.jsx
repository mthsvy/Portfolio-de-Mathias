import "./home.scss";
import Nav from "../../components/Nav";
import Presentation from "../../container/Presentation";
import Projects from "../../container/Projects";
import Parcours from "../../container/Parcours";
import Competences from "../../container/Competences";
import Form from "../../container/Form";
function Home() {
  return (
    <div>
      <Nav />
      <Presentation />
      <Projects />
      <Parcours />
      <Competences />
      <Form />
    </div>
  );
}

export default Home;
