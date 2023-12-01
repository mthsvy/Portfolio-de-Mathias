import "./error404.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error404 page">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div></div>
      </nav>
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
