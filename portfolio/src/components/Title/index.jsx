import "./title.scss";

function Title({ text }) {
  return (
    <div>
      <h2 className="title">{text}</h2>
      <div className="line"></div>
    </div>
  );
}

export default Title;
