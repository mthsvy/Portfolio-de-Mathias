import "./home.scss";
import Nav from "../../components/Nav";
import Presentation from "../../components/Presentation";
function Home() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <section>
        <Presentation />
      </section>
    </div>
  );
}

export default Home;
