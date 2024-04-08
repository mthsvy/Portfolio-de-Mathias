import "./comingsoon.scss";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="comingSoon background">
      <div></div>
      <span>Site en cours de déploiement, j'y travaille</span>
      <img
        src={require(`../../assets/Projects_pictures/coming_soon.gif`)}
        alt="gif"
        fetchpriority="high"
      />
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default ComingSoon;
