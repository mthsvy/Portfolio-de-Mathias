import "./parcours.scss";
import Title from "../../components/Title";
function Parcours() {
  return (
    <section id="parcours">
      <Title text="PARCOURS" />
      <div className="timeLine">
        <article>
          <h3>Intégrateur Web</h3>
          <ul>
            <li>
              <span>OpenClassRooms</span>
            </li>
            <li>
              <span>15/03/2023 - 15/12/2023</span>
            </li>
          </ul>
        </article>

        <article>
          <h3>BEP Gros Oeuvre</h3>
          <ul>
            <li>
              <span>Lycée Francois Mansart</span>
            </li>
            <li>
              <span>30/06/2015</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Parcours;
