import "./nav.scss";
function Nav() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#parcours">Parcours</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
