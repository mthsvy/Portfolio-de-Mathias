import Title from "../../components/Title";
import "./form.scss";
function Form() {
  return (
    <div id="contact">
      <Title text="CONTACT" />
      <footer className="contact">
        <div className="container">
          <div className="form-container">
            <form action="" method="post">
              <label htmlFor="nom">Nom</label>
              <input type="text" name="nom" id="nom" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Form;
