import { useState } from "react";
import Title from "../../components/Title";
import "./form.scss";

function Form() {
  const [animationEmail, setAnimationEmail] = useState(false);
  const [nomFormulaire, setNomFormulaire] = useState("");
  const [emailFormulaire, setEmailFormulaire] = useState("");
  const [messageFormulaire, setMessageFormulaire] = useState("");

  const envoyerMailPhp = async (nom, email, message) => {
    try {
      const response = await fetch("https://mathiasvilly.site/email.php", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: nom,
          email: email,
          message: message,
        }),
      });
      console.log(response);
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erreur de l'envoi :", error);
      return false;
    }
  };

  const envoyerMail = async (e) => {
    e.preventDefault();
    const erreurFormulaire = document.getElementById("erreurFormulaire");
    const erreurEnvoieMail = document.getElementById("erreurEnvoieMail");
    erreurEnvoieMail.style.display = "none";

    if (
      nomFormulaire === "" ||
      emailFormulaire === "" ||
      messageFormulaire === ""
    ) {
      erreurFormulaire.style.display = "block";
    } else {
      erreurFormulaire.style.display = "none";
      console.log(nomFormulaire, emailFormulaire, messageFormulaire);
      const emailEnvoye = await envoyerMailPhp(
        nomFormulaire,
        emailFormulaire,
        messageFormulaire
      );
      if (emailEnvoye === true) {
        setAnimationEmail(true);
        setTimeout(() => {
          setAnimationEmail(false);
        }, 5000);
      } else {
        erreurEnvoieMail.style.display = "block";
      }
    }
  };

  return (
    <div id="contact">
      <Title text="CONTACT" />
      <footer className="contact">
        <div className="container">
          <div className="form-container">
            <form action="https://mathiasvilly.site/email.php" method="post">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                onChange={(e) => setNomFormulaire(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmailFormulaire(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessageFormulaire(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
              <div id="erreurFormulaire" className="erreurFormulaire">
                Veuillez remplir le ou les champs manquants
              </div>
              <div id="erreurEnvoieMail" className="erreurEnvoiFormulaire">
                Erreur de l'envoi du formulaire
              </div>
              <input type="submit" value="Envoyer" onClick={envoyerMail} />
            </form>
            <div className={animationEmail ? "loader animation" : ""}>
              <div className={"textAlign " + (animationEmail ? "visible" : "")}>
                Votre message a bien été envoyé
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Form;
