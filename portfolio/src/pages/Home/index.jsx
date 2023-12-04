import "./home.scss";
import Nav from "../../components/Nav";
import Presentation from "../../components/Presentation";
import Projects from "../../components/Projects";
function Home() {
  return (
    <div>
      <Nav />
      <Presentation />
      <Projects />
    </div>
  );
}

export default Home;
