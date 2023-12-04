import "./nav.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Présentation</Link>
        </li>
        <li>
          <Link to="/">Réalisations</Link>
        </li>
        <li>
          <Link to="/">Compétences</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
