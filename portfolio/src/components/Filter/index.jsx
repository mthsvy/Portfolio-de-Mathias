import "./filter.scss";

function Filter({ select, onChange }) {
  return (
    <div id="" className="filters">
      <ul>
        <li onClick={() => onChange(null)} key="Tous">
          Tous
        </li>
        {select.map((outil) => (
          <li onClick={() => onChange(outil)} key={outil}>
            {outil.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
