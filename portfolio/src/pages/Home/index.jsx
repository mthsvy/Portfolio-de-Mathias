import "./home.scss";
import Nav from "../../components/Nav";
import Presentation from "../../container/Presentation";
import Projects from "../../container/Projects";
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
