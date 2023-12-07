import "./parcours.scss";
import Title from "../../components/Title";
function Parcours() {
  return (
    <section>
      <Title text="PARCOURS" />
      <div className="timeLine">
        <article>
          <h2>Intégrateur Web</h2>
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
          <h2>BEP Gros Oeuvre</h2>
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
