import "./Card.scss";

function Card({ children }) {
  return <div className="card flex-space-between flex-column">{children}</div>;
}

export default Card;
